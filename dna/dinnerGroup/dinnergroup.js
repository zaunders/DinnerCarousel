'use strict';

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated by hc-scaffold
// -----------------------------------------------------------------

// -----------------------------------------------------------------
//  Exposed functions with custom logic https://developer.holochain.org/API_reference
// -----------------------------------------------------------------

function geo_location_centerCreate (geo_location_centerEntry) {
  var geo_location_centerHash = commit("geo_location_center", geo_location_centerEntry);
  return geo_location_centerHash;
}

function geo_location_centerRead (geo_location_centerHash) {
  var geo_location_center = get(geo_location_centerHash);
  return geo_location_center;
}

function geo_location_centerUpdate (geo_location_centerHash) {
  var sampleValue={"checked":true,"adress":{"street":"Backavägen 8","zip":26868,"City":"Röstånga","Country":"Sweden"},"GPS":{"lat":55.99958030000001,"long":13.28495190000001},"extraField":true};
  var geo_location_centerOutHash = update("geo_location_center", sampleValue, geo_location_centerHash);
  return geo_location_centerOutHash;
}

function geo_location_centerDelete (geo_location_centerHash) {
  var result = remove(geo_location_centerHash, "");
  return result;
}

function max_distanceCreate (max_distanceEntry) {
  var max_distanceHash = commit("max_distance", max_distanceEntry);
  return max_distanceHash;
}

function max_distanceRead (max_distanceHash) {
  var max_distance = get(max_distanceHash);
  return max_distance;
}

function max_distanceUpdate (max_distanceHash) {
  var sampleValue={"max_distance_in_km":20,"extraField":true};
  var max_distanceOutHash = update("max_distance", sampleValue, max_distanceHash);
  return max_distanceOutHash;
}

function max_distanceDelete (max_distanceHash) {
  var result = remove(max_distanceHash, "");
  return result;
}

function invite_onlyCreate (invite_onlyEntry) {
  var invite_onlyHash = commit("invite_only", invite_onlyEntry);
  return invite_onlyHash;
}

function invite_onlyRead (invite_onlyHash) {
  var invite_only = get(invite_onlyHash);
  return invite_only;
}

function invite_onlyUpdate (invite_onlyHash) {
  var sampleValue={"invite_only":true,"extraField":true};
  var invite_onlyOutHash = update("invite_only", sampleValue, invite_onlyHash);
  return invite_onlyOutHash;
}

function invite_onlyDelete (invite_onlyHash) {
  var result = remove(invite_onlyHash, "");
  return result;
}

function conversation_topicsCreate (conversation_topicsEntry) {
  var conversation_topicsHash = commit("conversation_topics", conversation_topicsEntry);
  return conversation_topicsHash;
}

function conversation_topicsRead (conversation_topicsHash) {
  var conversation_topics = get(conversation_topicsHash);
  return conversation_topics;
}

function conversation_topicsUpdate (conversation_topicsHash) {
  var sampleValue={"topics":["politics"],"extraField":true};
  var conversation_topicsOutHash = update("conversation_topics", sampleValue, conversation_topicsHash);
  return conversation_topicsOutHash;
}

function conversation_topicsDelete (conversation_topicsHash) {
  var result = remove(conversation_topicsHash, "");
  return result;
}

function inexpensive_and_simple_dinnersCreate (inexpensive_and_simple_dinnersEntry) {
  var inexpensive_and_simple_dinnersHash = commit("inexpensive_and_simple_dinners", inexpensive_and_simple_dinnersEntry);
  return inexpensive_and_simple_dinnersHash;
}

function inexpensive_and_simple_dinnersRead (inexpensive_and_simple_dinnersHash) {
  var inexpensive_and_simple_dinners = get(inexpensive_and_simple_dinnersHash);
  return inexpensive_and_simple_dinners;
}

function inexpensive_and_simple_dinnersUpdate (inexpensive_and_simple_dinnersHash) {
  var sampleValue={"inexpensive":true,"extraField":true};
  var inexpensive_and_simple_dinnersOutHash = update("inexpensive_and_simple_dinners", sampleValue, inexpensive_and_simple_dinnersHash);
  return inexpensive_and_simple_dinnersOutHash;
}

function inexpensive_and_simple_dinnersDelete (inexpensive_and_simple_dinnersHash) {
  var result = remove(inexpensive_and_simple_dinnersHash, "");
  return result;
}

function BYODCreate (BYODEntry) {
  var BYODHash = commit("BYOD", BYODEntry);
  return BYODHash;
}

function BYODRead (BYODHash) {
  var BYOD = get(BYODHash);
  return BYOD;
}

function BYODUpdate (BYODHash) {
  var sampleValue={"BYOD":true,"extraField":true};
  var BYODOutHash = update("BYOD", sampleValue, BYODHash);
  return BYODOutHash;
}

function BYODDelete (BYODHash) {
  var result = remove(BYODHash, "");
  return result;
}

function allow_kids_or_petsCreate (allow_kids_or_petsEntry) {
  var allow_kids_or_petsHash = commit("allow_kids_or_pets", allow_kids_or_petsEntry);
  return allow_kids_or_petsHash;
}

function allow_kids_or_petsRead (allow_kids_or_petsHash) {
  var allow_kids_or_pets = get(allow_kids_or_petsHash);
  return allow_kids_or_pets;
}

function allow_kids_or_petsUpdate (allow_kids_or_petsHash) {
  var sampleValue={"allowed_to_bring":{"kids":true,"pets":true},"extraField":true};
  var allow_kids_or_petsOutHash = update("allow_kids_or_pets", sampleValue, allow_kids_or_petsHash);
  return allow_kids_or_petsOutHash;
}

function allow_kids_or_petsDelete (allow_kids_or_petsHash) {
  var result = remove(allow_kids_or_petsHash, "");
  return result;
}

function pot_luck_dinnersCreate (pot_luck_dinnersEntry) {
  var pot_luck_dinnersHash = commit("pot_luck_dinners", pot_luck_dinnersEntry);
  return pot_luck_dinnersHash;
}

function pot_luck_dinnersRead (pot_luck_dinnersHash) {
  var pot_luck_dinners = get(pot_luck_dinnersHash);
  return pot_luck_dinners;
}

function pot_luck_dinnersUpdate (pot_luck_dinnersHash) {
  var sampleValue={"potluck":true,"extraField":true};
  var pot_luck_dinnersOutHash = update("pot_luck_dinners", sampleValue, pot_luck_dinnersHash);
  return pot_luck_dinnersOutHash;
}

function pot_luck_dinnersDelete (pot_luck_dinnersHash) {
  var result = remove(pot_luck_dinnersHash, "");
  return result;
}

function dinnerCreate (dinnerEntry) {
  var dinnerHash = commit("dinner", dinnerEntry);
  return dinnerHash;
}

function dinnerRead (dinnerHash) {
  var dinner = get(dinnerHash);
  return dinner;
}

function dinnerUpdate (dinnerHash) {
  var sampleValue={"dinner_datetime":"2019-01-02:19.00","host":"host_userhash","guest_list":["userhash1"],"confirmed_dinner":true,"extraField":true};
  var dinnerOutHash = update("dinner", sampleValue, dinnerHash);
  return dinnerOutHash;
}

function dinnerDelete (dinnerHash) {
  var result = remove(dinnerHash, "");
  return result;
}

function create_tentative_dinner (params) {
  // your custom code here
  return {};
}

function delete_tentative_dinner (params) {
  // your custom code here
  return {};
}

function create_accepted_dinner (params) {
  // your custom code here
  return {};
}


// -----------------------------------------------------------------
//  The Genesis Function https://developer.holochain.org/genesis
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis () {
  return true;
}

// -----------------------------------------------------------------
//  Validation functions for every change to the local chain or DHT
// -----------------------------------------------------------------

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "geo_location_center":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "max_distance":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "invite_only":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "conversation_topics":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "inexpensive_and_simple_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "BYOD":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "allow_kids_or_pets":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "pot_luck_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "dinner":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "geo_location_center":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "max_distance":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "invite_only":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "conversation_topics":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "inexpensive_and_simple_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "BYOD":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "allow_kids_or_pets":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "pot_luck_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "dinner":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {string} replaces - the hash for the entry being updated
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "geo_location_center":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "max_distance":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "invite_only":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "conversation_topics":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "inexpensive_and_simple_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "BYOD":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "allow_kids_or_pets":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "pot_luck_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "dinner":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} hash - the hash of the entry to remove
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "geo_location_center":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "max_distance":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "invite_only":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "conversation_topics":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "inexpensive_and_simple_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "BYOD":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "allow_kids_or_pets":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "pot_luck_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "dinner":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} baseHash - the hash of the base entry being linked
 * @param {?} links - ?
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateLink (entryName, baseHash, links, pkg, sources) {
  switch (entryName) {
    case "geo_location_center":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "max_distance":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "invite_only":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "conversation_topics":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "inexpensive_and_simple_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "BYOD":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "allow_kids_or_pets":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "pot_luck_dinners":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case "dinner":
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateModPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateDelPkg (entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateLinkPkg (entryName) {
  return null;
}
