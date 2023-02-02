import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import {updateCartCount} from "./superscriptNumber.js";
loadHeaderFooter();
updateCartCount();
const dataSource = new ProductData("tents"); 
const element = document.querySelector(".product-list");
const listing = new ProductListing("Tents", dataSource, element);
listing.init();
