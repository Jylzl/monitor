'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 channels 表
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      STRING,
      TINYINT,
      DATE,
    } = Sequelize;
    await queryInterface.createTable('channels', {
      // 栏目ID
      channel_id: {
        type: INTEGER(8),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: '栏目ID',
      },
      // 栏目名称
      channel_name: {
        type: STRING(64),
        allowNull: false,
        comment: '栏目名称',
      },
      // 栏目状态: 0正常栏目,1表示单页
      channel_state: {
        type: TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment: '0正常栏目,1表示单页',
      },
      // 栏目路径
      channel_path: {
        type: STRING(128),
        allowNull: false,
        comment: '栏目路径',
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
  // 在执行数据库降级时调用的函数，删除 channels 表
  down: async queryInterface => {
    await queryInterface.dropTable('channels');
  },
};
