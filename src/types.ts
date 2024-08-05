// src/custom-types.ts

export type Email = string & { __email__: never };
export type URL = string & { __url__: never };
export type PhoneNumber = string & { __phoneNumber__: never };
export type DateString = string & { __date__: never };
export type UUID = string & { __uuid__: never };
export type CreditCard = string & { __creditCard__: never };
export type PostalCode = string & { __postalCode__: never };
export type HexColor = string & { __hexColor__: never };
export type IPv4 = string & { __ipv4__: never };
export type IPv6 = string & { __ipv6__: never };
export type Currency = string & { __currency__: never };
export type SSN = string & { __ssn__: never };
export type DateTime = string & { __dateTime__: never };
export type Gender = "male" | "female" | "non-binary" | "other";
export type CountryCode = string & { __countryCode__: never };
export type Username = string & { __username__: never };
export type Password = string & { __password__: never };
export type MACAddress = string & { __macAddress__: never };
export type Latitude = string & { __latitude__: never };
export type Longitude = string & { __longitude__: never };
export type ISBN = string & { __isbn__: never };
export type Hexadecimal = string & { __hexadecimal__: never };
export type Base64 = string & { __base64__: never };
export type TwitterHandle = string & { __twitterHandle__: never };
export type Slug = string & { __slug__: never };
