const login = require("./general/user/login");
const resources = require("./general/user/resources");
const session = require("./general/user/session");
const typeAccount = require("./general/user/typeAccount");
const user = require("./general/user");

const company = require("./general/company");

const accessories = require("./estoque/product/accessories");
const car = require("./estoque/technician/car");
const entrance = require("./estoque/entrance");
const equip = require("./estoque/product/equip");
const equipType = require("./estoque/product/equip/equipType");
const freeMarket = require("./estoque/reserve/freeMarket");
const freeMarketParts = require("./estoque/reserve/freeMarketParts");
const kit = require("./estoque/reserve/kit");
const kitOut = require("./estoque/reserve/kitOut");
const kitParts = require("./estoque/reserve/kitParts");
const kitPartsOut = require("./estoque/reserve/kitPartsOut");
const product = require("./estoque/product");
const mark = require("./estoque/product/mark");
const notification = require("./estoque/notification");
const os = require("./estoque/reserve/os");
const osParts = require("./estoque/reserve/osParts");
const stockBase = require("./estoque/stockBase");
const technician = require("./estoque/technician");
const technicianReserve = require("./estoque/reserve/technicianReserve");
const technicianReserveParts = require("./estoque/reserve/technicianReserveParts");
const productBase = require("./estoque/stockBase/productBase");
const statusExpedition = require("./estoque/reserve/statusExpedition");
const emprestimo = require("./estoque/emprestimo");
const conserto = require("./estoque/conserto");

const analyze = require("./labtec/analyze");
const analysisPart = require("./labtec/analyze/analysisPart");
const entryEquipment = require("./labtec/entryEquipment");
const pause = require("./labtec/analyze/pause");
const process = require("./labtec/process");
const time = require("./labtec/process/time");

const supProduct = require("./estoque/suprimentos/supProduct");
const supProvider = require("./estoque/suprimentos/supProvider");
const supContact = require("./estoque/suprimentos/supProvider/supContact");
const supOut = require("./estoque/suprimentos/supOut");
const manufacturer = require("./estoque/suprimentos/supProduct/manufacturer");

module.exports = [
  login,
  resources,
  session,
  typeAccount,
  user,

  company,

  accessories,
  car,
  entrance,
  equip,
  equipType,
  freeMarket,
  freeMarketParts,
  kit,
  kitOut,
  kitParts,
  kitPartsOut,
  product,
  mark,
  notification,
  os,
  osParts,
  stockBase,
  technician,
  technicianReserve,
  technicianReserveParts,
  productBase,
  statusExpedition,
  emprestimo,
  conserto,

  analyze,
  analysisPart,
  entryEquipment,
  pause,
  process,
  time,

  supProduct,
  manufacturer,
  supProvider,
  supOut,
  supContact
];
