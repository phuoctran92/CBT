const Workspace = require('../models/Workspace')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

exports.getUsersOfWorkspace = async (req, res, next) => {
  try {
    const { userId } = req.user
    const { workspace } = await User.findById(userId)
    const allUsers = await User.find({ workspace: workspace })
    res.status(200).json({
      status: 'Success',
      results: allUsers.length,
      data: { allUsers },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.addUserToWorkspace = async (req, res, next) => {
  try {
    const { email } = req.body
    const { workspaceDomain } = req.params
    const user = await User.findOne({ email: email })
    const { _id } = await Workspace.findOne({ domain: workspaceDomain })
    if (!user) {
      const err = new Error('Email is not found')
      err.statusCode = 300
      return next(err)
    }
    if (!user.workspace.includes(_id)) {
      user.workspace.push(_id)
    } else {
      const err = new Error('User is already in workspace')
      err.statusCode = 300
      return next(err)
    }

    await User.findByIdAndUpdate(
      user._id,
      { ...user },
      { new: true, runValidator: true }
    )

    res.status(200).json({
      status: 'Success',
      data: { user },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.addAdminForWorkspace = async (req, res, next) => {
  try {
    const { email } = req.body
    const { workspaceDomain } = req.params
    const user = await User.findOne({ email: email })
    const workspace = await Workspace.findOne({ domain: workspaceDomain })
    if (!user) {
      const err = new Error('Email is not correct')
      err.statusCode = 400
      return next(err)
    }
    if (!workspace.adminWorkspace.includes(user._id)) {
      workspace.adminWorkspace.push(user._id)
      user.role = 'ADMIN_WORKSPACE'
    } else {
      res.json('This user has been admin of workspace')
    }
    if (!user.workspace.includes(workspace._id)) {
      user.workspace.push(workspace._id)
    }

    await User.findByIdAndUpdate(
      user._id,
      { ...user },
      { new: true, runValidator: true }
    )

    await Workspace.findByIdAndUpdate(
      workspace._id,
      { ...workspace },
      { new: true, runValidator: true }
    )

    res.status(200).json({
      status: 'Success',
      data: { user },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const workspace = await Workspace.findOneAndUpdate(
      { domain: workspaceDomain },
      { ...req.body },
      { new: true, runValidator: true }
    )

    res.status(200).json({
      status: 'Success',
      data: { workspace },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const foundWorkspace = await Workspace.findOne({ domain: workspaceDomain })
    if (!foundWorkspace) {
      return res.status(300).json({ message: 'Cant find workspace' })
    }
    await Workspace.findOneAndRemove({ domain: workspaceDomain })
    res.status(200).json({
      status: 'Success',
      message: 'Workspace has been deleted',
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

exports.getInfoUser = async (req, res, next) => {
  try {
    const { workspaceDomain } = req.params
    const workspace = await Workspace.findOne({
      domain: workspaceDomain,
    })
    res.status(200).json({
      status: 'Success',
      data: { workspace },
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}
