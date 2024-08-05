// src/validators.ts

import {
  Email,
  URL,
  PhoneNumber,
  DateString,
  UUID,
  CountryCode,
  CreditCard,
  Currency,
  DateTime,
  Gender,
  HexColor,
  IPv4,
  IPv6,
  PostalCode,
  SSN,
  Base64,
  Hexadecimal,
  ISBN,
  Latitude,
  Longitude,
  MACAddress,
  Password,
  Slug,
  TwitterHandle,
  Username,
} from "./types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const creditCardRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9][0-9])[0-9]{12}|7[0-9]{15})$/;

const postalCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

const ipv4Regex =
  /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
const ipv6Regex = /([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)/;

const currencyRegex = /^\$?([0-9]+(\.[0-9]{2})?)$/;

const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

const dateTimeRegex =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[\+\-]\d{2}:\d{2})$/;

const countryCodeRegex = /^[A-Z]{2}$/;
const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
const latitudeRegex = /^(-?[0-9]{1,2}(?:\.[0-9]+)?)$/;
const longitudeRegex = /^(-?[0-9]{1,3}(?:\.[0-9]+)?)$/;
const isbn10Regex = /^(?:\d[\ |-]?){9}[\dX]$/;
const isbn13Regex = /^(?:\d[\ |-]?){13}$/;
const hexadecimalRegex = /^[0-9A-Fa-f]+$/;
const base64Regex =
  /^(?:[A-Za-z\d+\/]{4})*(?:[A-Za-z\d+\/]{2}==|[A-Za-z\d+\/]{3}=)?$/;
const twitterHandleRegex = /^@([A-Za-z0-9_]{1,15})$/;
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isSlug(value: string): value is Slug {
  return slugRegex.test(value);
}

export function isTwitterHandle(value: string): value is TwitterHandle {
  return twitterHandleRegex.test(value);
}

export function isBase64(value: string): value is Base64 {
  return base64Regex.test(value);
}

export function isHexadecimal(value: string): value is Hexadecimal {
  return hexadecimalRegex.test(value);
}

export function isISBN(value: string): value is ISBN {
  return isbn10Regex.test(value) || isbn13Regex.test(value);
}

export function isLatitude(value: string): value is Latitude {
  return (
    latitudeRegex.test(value) &&
    parseFloat(value) >= -90 &&
    parseFloat(value) <= 90
  );
}

export function isLongitude(value: string): value is Longitude {
  return (
    longitudeRegex.test(value) &&
    parseFloat(value) >= -180 &&
    parseFloat(value) <= 180
  );
}

export function isMACAddress(value: string): value is MACAddress {
  return macAddressRegex.test(value);
}

export function isPassword(value: string): value is Password {
  return passwordRegex.test(value);
}

export function isUsername(value: string): value is Username {
  return usernameRegex.test(value);
}

export function isGender(value: any): value is Gender {
  return ["male", "female", "non-binary", "other"].includes(value);
}

export function isCountryCode(value: string): value is CountryCode {
  return countryCodeRegex.test(value);
}

export function isDateTime(value: string): value is DateTime {
  return dateTimeRegex.test(value);
}

export function isSSN(value: string): value is SSN {
  return ssnRegex.test(value);
}

export function isCurrency(value: string): value is Currency {
  return currencyRegex.test(value);
}

export function isIPv4(value: string): value is IPv4 {
  return ipv4Regex.test(value);
}

export function isIPv6(value: string): value is IPv6 {
  return ipv6Regex.test(value);
}

export function isHexColor(value: string): value is HexColor {
  return hexColorRegex.test(value);
}

export function isPostalCode(value: string): value is PostalCode {
  return postalCodeRegex.test(value);
}

export function isCreditCard(value: string): value is CreditCard {
  return creditCardRegex.test(value);
}

export function isUUID(value: string): value is UUID {
  return uuidRegex.test(value);
}

export function isEmail(value: string): value is Email {
  return emailRegex.test(value);
}

export function isURL(value: string): value is URL {
  return urlRegex.test(value);
}

export function isPhoneNumber(value: string): value is PhoneNumber {
  return phoneNumberRegex.test(value);
}

export function isDateString(value: string): value is DateString {
  return dateRegex.test(value);
}
