var DataTypes = require("sequelize").DataTypes;
var _t_action = require("./t_action");
var _t_character = require("./t_character");
var _t_character_quest = require("./t_character_quest");
var _t_discord_user = require("./t_discord_user");
var _t_event = require("./t_event");
var _t_group = require("./t_group");
var _t_inventory = require("./t_inventory");
var _t_item = require("./t_item");
var _t_item_set = require("./t_item_set");
var _t_location = require("./t_location");
var _t_loot_set = require("./t_loot_set");
var _t_map = require("./t_map");
var _t_mutant = require("./t_mutant");
var _t_mutant_list = require("./t_mutant_list");
var _t_quest = require("./t_quest");
var _t_settings = require("./t_settings");
var _t_slot = require("./t_slot");

function initModels(sequelize) {
  var t_action = _t_action(sequelize, DataTypes);
  var t_character = _t_character(sequelize, DataTypes);
  var t_character_quest = _t_character_quest(sequelize, DataTypes);
  var t_discord_user = _t_discord_user(sequelize, DataTypes);
  var t_event = _t_event(sequelize, DataTypes);
  var t_group = _t_group(sequelize, DataTypes);
  var t_inventory = _t_inventory(sequelize, DataTypes);
  var t_item = _t_item(sequelize, DataTypes);
  var t_item_set = _t_item_set(sequelize, DataTypes);
  var t_location = _t_location(sequelize, DataTypes);
  var t_loot_set = _t_loot_set(sequelize, DataTypes);
  var t_map = _t_map(sequelize, DataTypes);
  var t_mutant = _t_mutant(sequelize, DataTypes);
  var t_mutant_list = _t_mutant_list(sequelize, DataTypes);
  var t_quest = _t_quest(sequelize, DataTypes);
  var t_settings = _t_settings(sequelize, DataTypes);
  var t_slot = _t_slot(sequelize, DataTypes);

  t_action.belongsTo(t_character, { as: "id_character_t_character", foreignKey: "id_character"});
  t_character.hasMany(t_action, { as: "t_actions", foreignKey: "id_character"});
  t_character_quest.belongsTo(t_character, { as: "id_character_t_character", foreignKey: "id_character"});
  t_character.hasMany(t_character_quest, { as: "t_character_quests", foreignKey: "id_character"});
  t_inventory.belongsTo(t_character, { as: "id_character_t_character", foreignKey: "id_character"});
  t_character.hasMany(t_inventory, { as: "t_inventories", foreignKey: "id_character"});
  t_slot.belongsTo(t_character, { as: "id_character_t_character", foreignKey: "id_character"});
  t_character.hasOne(t_slot, { as: "t_slot", foreignKey: "id_character"});
  t_character.belongsTo(t_discord_user, { as: "id_discord_user_t_discord_user", foreignKey: "id_discord_user"});
  t_discord_user.hasMany(t_character, { as: "t_characters", foreignKey: "id_discord_user"});
  t_character.belongsTo(t_group, { as: "id_group_t_group", foreignKey: "id_group"});
  t_group.hasMany(t_character, { as: "t_characters", foreignKey: "id_group"});
  t_settings.belongsTo(t_group, { as: "id_group_t_group", foreignKey: "id_group"});
  t_group.hasMany(t_settings, { as: "t_settings", foreignKey: "id_group"});
  t_inventory.belongsTo(t_item, { as: "id_item_t_item", foreignKey: "id_item"});
  t_item.hasMany(t_inventory, { as: "t_inventories", foreignKey: "id_item"});
  t_item_set.belongsTo(t_item, { as: "id_item_t_item", foreignKey: "id_item"});
  t_item.hasMany(t_item_set, { as: "t_item_sets", foreignKey: "id_item"});
  t_quest.belongsTo(t_item, { as: "id_item_reward_t_item", foreignKey: "id_item_reward"});
  t_item.hasMany(t_quest, { as: "t_quests", foreignKey: "id_item_reward"});
  t_quest.belongsTo(t_item, { as: "id_item_target_t_item", foreignKey: "id_item_target"});
  t_item.hasMany(t_quest, { as: "id_item_target_t_quests", foreignKey: "id_item_target"});
  t_slot.belongsTo(t_item, { as: "c_belt_1_t_item", foreignKey: "c_belt_1"});
  t_item.hasMany(t_slot, { as: "t_slots", foreignKey: "c_belt_1"});
  t_slot.belongsTo(t_item, { as: "c_belt_2_t_item", foreignKey: "c_belt_2"});
  t_item.hasMany(t_slot, { as: "c_belt_2_t_slots", foreignKey: "c_belt_2"});
  t_slot.belongsTo(t_item, { as: "c_belt_3_t_item", foreignKey: "c_belt_3"});
  t_item.hasMany(t_slot, { as: "c_belt_3_t_slots", foreignKey: "c_belt_3"});
  t_slot.belongsTo(t_item, { as: "c_body_t_item", foreignKey: "c_body"});
  t_item.hasMany(t_slot, { as: "c_body_t_slots", foreignKey: "c_body"});
  t_slot.belongsTo(t_item, { as: "c_head_t_item", foreignKey: "c_head"});
  t_item.hasMany(t_slot, { as: "c_head_t_slots", foreignKey: "c_head"});
  t_slot.belongsTo(t_item, { as: "c_weapon_t_item", foreignKey: "c_weapon"});
  t_item.hasMany(t_slot, { as: "c_weapon_t_slots", foreignKey: "c_weapon"});
  t_settings.belongsTo(t_location, { as: "id_location_t_location", foreignKey: "id_location"});
  t_location.hasMany(t_settings, { as: "t_settings", foreignKey: "id_location"});
  t_item_set.belongsTo(t_loot_set, { as: "id_loot_set_t_loot_set", foreignKey: "id_loot_set"});
  t_loot_set.hasMany(t_item_set, { as: "t_item_sets", foreignKey: "id_loot_set"});
  t_settings.belongsTo(t_loot_set, { as: "id_loot_set_t_loot_set", foreignKey: "id_loot_set"});
  t_loot_set.hasMany(t_settings, { as: "t_settings", foreignKey: "id_loot_set"});
  t_character.belongsTo(t_map, { as: "id_map_t_map", foreignKey: "id_map"});
  t_map.hasMany(t_character, { as: "t_characters", foreignKey: "id_map"});
  t_location.belongsTo(t_map, { as: "id_map_t_map", foreignKey: "id_map"});
  t_map.hasMany(t_location, { as: "t_locations", foreignKey: "id_map"});
  t_mutant_list.belongsTo(t_map, { as: "id_map_t_map", foreignKey: "id_map"});
  t_map.hasMany(t_mutant_list, { as: "t_mutant_lists", foreignKey: "id_map"});
  t_mutant_list.belongsTo(t_mutant, { as: "id_mutant_t_mutant", foreignKey: "id_mutant"});
  t_mutant.hasMany(t_mutant_list, { as: "t_mutant_lists", foreignKey: "id_mutant"});
  t_quest.belongsTo(t_mutant, { as: "id_monster_target_t_mutant", foreignKey: "id_monster_target"});
  t_mutant.hasMany(t_quest, { as: "t_quests", foreignKey: "id_monster_target"});
  t_character_quest.belongsTo(t_quest, { as: "id_quest_t_quest", foreignKey: "id_quest"});
  t_quest.hasMany(t_character_quest, { as: "t_character_quests", foreignKey: "id_quest"});
  t_mutant_list.belongsTo(t_quest, { as: "id_quest_t_quest", foreignKey: "id_quest"});
  t_quest.hasMany(t_mutant_list, { as: "t_mutant_lists", foreignKey: "id_quest"});

  return {
    t_action,
    t_character,
    t_character_quest,
    t_discord_user,
    t_event,
    t_group,
    t_inventory,
    t_item,
    t_item_set,
    t_location,
    t_loot_set,
    t_map,
    t_mutant,
    t_mutant_list,
    t_quest,
    t_settings,
    t_slot,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
