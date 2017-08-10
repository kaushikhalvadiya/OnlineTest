import itemRepository from "./repository/items.js";

let items = itemRepository.items;

exports.getAllItem = function()
{
    return items;
}