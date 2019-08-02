'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 sites 表
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      STRING,
      TINYINT,
      DATE,
    } = Sequelize;
    await queryInterface.createTable('sites', {
      // 站点ID
      site_id: {
        type: INTEGER(8),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        comment: '站点ID',
      },
      // 站点标识码
      site_code: {
        type: STRING(64),
        allowNull: true,
        comment: '站点标识码',
      },
      // 站点名称
      site_name: {
        type: STRING(64),
        allowNull: false,
        comment: '站点名称',
      },
      // 站点路径
      site_path: {
        type: STRING(64),
        allowNull: false,
        comment: '站点路径',
      },
      // 站点状态: 1表示正常，0关停
      site_state: {
        type: TINYINT(1),
        allowNull: false,
        defaultValue: 1,
        comment: '站点状态: 1表示正常，0关停，3不监测',
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
  // 在执行数据库降级时调用的函数，删除 sites 表
  down: async queryInterface => {
    await queryInterface.dropTable('sites');
  },
};
