interface Routes {
  default: string;
  workspace: string;
  user: string;
  question: {
    default: string,
    create: {
      default: string,
      selectOne: string,
      selectMany: string,
      matching: string,
      dropdown: string,
      fillGaps: string,
      essay: string,
    },
    edit: string
  };
  test: {
    default: string,
    create: string,
    edit: string
  };
  class: {
    default: string,
    create: string,
    edit: string
  };
  login: string;
}

export const routes: Routes = {
  default: '/',
  workspace: 'workspace',
  user: '/user',
  question: {
    default: '/question',
    create: {
      default: '/question/create',
      selectOne: '/question/create/select-one',
      selectMany: '/question/create/select-many',
      matching: '/question/create/matching',
      dropdown: '/question/create/dropdown-select',
      fillGaps: '/question/create/fill-in-the-gaps',
      essay: '/question/create/essay',
    },
    edit: '/question/edit/:questionId'
  },
  test: {
    default: '/test',
    create: '/test/create',
    edit: '/test/:testId'
  },
  class: {
    default: '/class',
    create: '/class/create',
    edit: '/class/:classId'
  },
  login: '/login',
}
