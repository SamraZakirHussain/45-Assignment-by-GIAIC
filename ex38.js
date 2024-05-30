function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is the beautiful city of ").concat(country));
}
describe_city("karachi");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
