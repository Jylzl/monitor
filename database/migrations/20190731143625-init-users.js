'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      STRING,
      CHAR,
      TINYINT,
      DATE,
    } = Sequelize;
    await queryInterface.createTable('users', {
      // 用户ID
      user_id: {
        type: INTEGER(8),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: '用户ID',
      },
      // 用户名
      user_name: {
        type: STRING(10),
        allowNull: false,
        comment: '用户名',
      },
      // 密码
      user_pswd: {
        type: CHAR(32),
        allowNull: false,
        comment: '密码',
      },
      // 手机号码
      user_phone: {
        type: CHAR(11),
        allowNull: false,
        comment: '手机号码',
      },
      // 邮箱号码
      user_email: {
        type: STRING(320),
        allowNull: false,
        comment: '邮箱号码',
      },
      // QQ账号
      user_qq: {
        type: STRING(11),
        allowNull: true,
        comment: 'QQ账号',
      },
      // GitHub地址
      user_github: {
        type: STRING(32),
        allowNull: true,
        comment: 'GitHub地址',
      },
      // 用户头像地址
      user_image_url: {
        type: STRING(320),
        allowNull: true,
        comment: '用户头像地址',
      },
      // 用户头像选择
      user_image_type: {
        type: TINYINT(3),
        allowNull: false,
        comment: '用户头像选择',
      },
      // 用户注册IP
      user_register_ip: {
        type: CHAR(16),
        allowNull: false,
        comment: '用户注册IP',
      },
      // 用户最后登录IP
      user_last_login_ip: {
        type: CHAR(16),
        allowNull: true,
        comment: '用户最后登录IP',
      },
      // 用户状态: 1表示在线，0离线
      user_type: {
        type: TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment: '用户状态: 1表示在线，0离线',
      },
      // 账户状态，0表示正常，1表示锁定
      user_lock: {
        type: TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment: '账户状态，0表示正常，1表示锁定',
      },
      // 是否冻结，0为不冻结，1为冻结
      user_freeze: {
        type: TINYINT(1),
        allowNull: false,
        defaultValue: 1,
        comment: '是否冻结，0为不冻结，1为冻结',
      },
      created_at: {
        type: DATE,
        allowNull: false,
        comment: '创建时间',
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        comment: '更新时间',
      },
      delete_at: {
        type: DATE,
        comment: '删除时间',
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
