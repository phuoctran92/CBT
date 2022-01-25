interface Routes {
  default: string;
  workspace: string;
  user: string;
  question: string;
  test: string;
  class: string;
  login: string;
}

export const routes: Routes = {
  default: '/',
  workspace: 'workspace',
  user: '/user',
  question: '/question',
  test: '/test',
  class: '/class',
  login: '/login',
}
