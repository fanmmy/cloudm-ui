import Mock from 'mockjs2'
import { builder } from '../util'

const info = (options) => {
  console.log('options', options)
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': '天野远子1',
    'username': 'admin',
    'avatar': '/avatar2.jpg',
    // 'status': 1,
    // 'telephone': '',
    // 'lastLoginIp': '27.154.74.117',
    // 'lastLoginTime': 1534837621348,
    // 'creatorId': 'admin',
    // 'createTime': 1497160610259,
    // 'deleted': 0,
    'roleId': 'admin',
    'role': {}
  }
  // role
  const roleObj = {
    'id': 'admin',
    'name': '管理员',

    'permissions': [ {
      'roleId': 'admin',
      'permissionId': 'dashboard',
      'permissionName': '仪表盘',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"}]'
    }]
  }

  userInfo.role = roleObj
  return builder(userInfo)
}

const userNav = (options) => {
  const nav = [
    // other

    {
      'name': 'other',
      'parentId': 0,
      'id': 20001,
      'meta': {
        'title': '其他',
        'icon': 'slack',
        'show': true
      },
      'redirect': '/other/icon-selector',
      'component': 'RouteView'
    },
    {
      'parentId': 20001,
      'id': 2000103,
      'path': '/list/table-list/:pageNo([1-9]\\d*)?',
      'name': 'TableListWrapper',
      'hideChildrenInMenu': true, // 强制显示 MenuItem 而不是 SubMenu
      'component': 'list/TableList',
      'meta': { 'title': '查询表格', 'keepAlive': true, 'icon': 'tool' }
    },
    {
      'path': '/other/icon-selector',
      'name': 'icon-selector',
      'parentId': 20001,
      'id': 2000101,
      'component': 'other/IconSelectorView',
      'meta': { 'title': 'IconSelector', 'icon': 'tool', 'keepAlive': true }
    },
    {
      'parentId': 20001,
      'id': 2000102,
      'path': '/other/list',
      'component': 'RouteView',
      'meta': { 'title': '业务布局', 'icon': 'layout' },
      'redirect': '/other/list/tree-list'
    },
    {
      'path': '/other/list/role-list',
      'name': 'RoleList',
      'parentId': 2000102,
      'id': 200010201,
      'component': 'other/RoleList',
      'meta': { 'title': '角色列表', 'keepAlive': true }
    },
    {
      'parentId': 2000102,
      'id': 200010202,
      'path': '/other/list/system-role',
      'name': 'SystemRole',
      'component': 'role/RoleList',
      'meta': { 'title': '角色列表2', 'keepAlive': true }
    },
    {
      'parentId': 2000102,
      'id': 200010203,
      'path': '/other/list/permission-list',
      'name': 'PermissionList',
      'component': 'other/PermissionList',
      'meta': { 'title': '权限列表', 'keepAlive': true }
    },
    {
      'parentId': 2000102,
      'id': 200010204,
      'path': '/other/list/user-list',
      'name': 'UserList',
      'component': 'other/UserList',
      'meta': { 'title': '用户列表', 'keepAlive': true }
    },
    // result
    {
      'name': 'result',
      'parentId': 0,
      'id': 10021,
      'meta': {
        'title': '结果页',
        'icon': 'check-circle-o',
        'show': true
      },
      'redirect': '/result/success',
      'component': 'PageView'
    },
    {
      'name': 'success',
      'parentId': 10021,
      'id': 10022,
      'meta': {
        'title': '成功',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultSuccess'
    },
    {
      'name': 'fail',
      'parentId': 10021,
      'id': 10023,
      'meta': {
        'title': '失败',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultFail'
    },

    // Exception
    {
      'name': 'exception',
      'parentId': 0,
      'id': 10024,
      'meta': {
        'title': '异常页',
        'icon': 'warning',
        'show': true
      },
      'redirect': '/exception/403',
      'component': 'RouteView'
    },
    {
      'name': '403',
      'parentId': 10024,
      'id': 10025,
      'meta': {
        'title': '403',
        'show': true
      },
      'component': 'Exception403'
    },
    {
      'name': '404',
      'parentId': 10024,
      'id': 10026,
      'meta': {
        'title': '404',
        'show': true
      },
      'component': 'Exception404'
    },
    {
      'name': '500',
      'parentId': 10024,
      'id': 10027,
      'meta': {
        'title': '500',
        'show': true
      },
      'component': 'Exception500'
    },

    // account
    {
      'name': 'account',
      'parentId': 0,
      'id': 10028,
      'meta': {
        'title': '个人页',
        'icon': 'user',
        'show': true
      },
      'redirect': '/account/center',
      'component': 'RouteView'
    },
    {
      'name': 'center',
      'parentId': 10028,
      'id': 10029,
      'meta': {
        'title': '个人中心',
        'show': true
      },
      'component': 'AccountCenter'
    },
    // 特殊三级菜单
    {
      'name': 'settings',
      'parentId': 10028,
      'id': 10030,
      'meta': {
        'title': '个人设置',
        'hideHeader': true,
        'hideChildren': true,
        'show': true
      },
      'redirect': '/account/settings/base',
      'component': 'AccountSettings'
    },
    {
      'name': 'BaseSettings',
      'path': '/account/settings/base',
      'parentId': 10030,
      'id': 10031,
      'meta': {
        'title': '基本设置',
        'show': false
      },
      'component': 'BaseSettings'
    },
    {
      'name': 'SecuritySettings',
      'path': '/account/settings/security',
      'parentId': 10030,
      'id': 10032,
      'meta': {
        'title': '安全设置',
        'show': false
      },
      'component': 'SecuritySettings'
    },
    {
      'name': 'CustomSettings',
      'path': '/account/settings/custom',
      'parentId': 10030,
      'id': 10033,
      'meta': {
        'title': '个性化设置',
        'show': false,
        'hiddenHeaderContent': true
      },
      'component': 'CustomSettings'
    },
    {
      'name': 'BindingSettings',
      'path': '/account/settings/binding',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '账户绑定',
        'show': false
      },
      'component': 'BindingSettings'
    },
    {
      'name': 'NotificationSettings',
      'path': '/account/settings/notification',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '新消息通知',
        'show': false
      },
      'component': 'NotificationSettings'
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
  // return builder([{
  //   'name': 'account',
  //   'parentId': 0,
  //   'id': 10028,
  //   'meta': {
  //     'title': '个人页',
  //     'icon': 'user',
  //     'show': true
  //   },
  //   'redirect': '/account/center',
  //   'component': 'RouteView'
  // },
  // {
  //   'name': 'center',
  //   'parentId': 10028,
  //   'id': 10029,
  //   'meta': {
  //     'title': '个人中心',
  //     'show': true
  //   },
  //   'component': 'AccountCenter'
  // },
  // {
  //   'name': 'other',
  //   'parentId': 0,
  //   'id': 20001,
  //   'meta': {
  //     'title': '其他',
  //     'icon': 'slack',
  //     'show': true
  //   },
  //   'redirect': '/other/icon-selector',
  //   'component': 'RouteView'
  // },
  // {
  //   'parentId': 20001,
  //   'id': 2000103,
  //   'path': '/list/table-list/:pageNo([1-9]\\d*)?',
  //   'name': 'TableListWrapper',
  //   'hideChildrenInMenu': true, // 强制显示 MenuItem 而不是 SubMenu
  //   'component': 'list/TableList',
  //   'meta': { 'title': '查询表格', 'keepAlive': true, 'icon': 'tool' }
  // }])
}

console.log(info)
//  Mock.mock(/\/user\/info/, 'get', info)
Mock.mock(/\/us333er\/nav/, 'get', userNav)
