interface Routes {
  default: string;
  workspace: string;
  user: string;
  question: {
    default: string,
    create: string,
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
    create: '/question/create',
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
