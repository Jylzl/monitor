'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    CHAR,
    TINYINT,
    DATE,
  } = app.Sequelize;

  const User = app.model.define('user', {
    user_id: {
      type: INTEGER(8),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      comment: '用户ID',
    },
    user_name: {
      type: STRING(10),
      allowNull: false,
      comment: '用户名',
    },
    user_pswd: {
      type: CHAR(32),
      allowNull: false,
      comment: '密码',
    },
    user_phone: {
      type: CHAR(11),
      allowNull: false,
      comment: '手机号码',
    },
    user_email: {
      type: STRING(320),
      allowNull: false,
      comment: '邮箱号码',
    },
    user_qq: {
      type: STRING(11),
      allowNull: true,
      comment: 'QQ账号',
    },
    user_github: {
      type: STRING(32),
      allowNull: true,
      comment: 'GitHub地址',
    },
    user_image_url: {
      type: STRING(320),
      allowNull: true,
      comment: '用户头像地址',
    },
    user_image_type: {
      type: TINYINT(3),
      allowNull: false,
      comment: '用户头像选择',
    },
    user_register_ip: {
      type: CHAR(16),
      allowNull: false,
      comment: '用户注册IP',
    },
    user_last_login_ip: {
      type: CHAR(16),
      allowNull: true,
      comment: '用户最后登录IP',
    },
    user_type: {
      type: TINYINT(1),
      allowNull: false,
      defaultValue: 0,
      comment: '用户状态: 1表示在线，0离线',
    },
    user_lock: {
      type: TINYINT(1),
      allowNull: false,
      defaultValue: 0,
      comment: '账户状态，0表示正常，1表示锁定',
    },
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
  }, {
    timestamps: true, // 去除createAt updateAt
    freezeTableName: true, // 使用自定义表名
    // 实例对应的表名
    tableName: 'users',
    // 如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
    // 将createdAt对应到数据库的created_at字段
    createdAt: 'created_at',
    // 将updatedAt对应到数据库的updated_at字段
    updatedAt: 'updated_at',
    // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
    deletedAt: false, // 'deleted_at',
    // 删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
    paranoid: false,
  });

  return User;
};
