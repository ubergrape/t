# t

extended translating

[![Build Status](https://travis-ci.org/Swatinem/t.png?branch=master)](https://travis-ci.org/Swatinem/t)
[![Coverage Status](https://coveralls.io/repos/Swatinem/t/badge.png?branch=master)](https://coveralls.io/r/Swatinem/t)
[![Dependency Status](https://gemnasium.com/Swatinem/t.png)](https://gemnasium.com/Swatinem/t)

## Installation

    $ component install Swatinem/t

## Usage

This inherits from [component/t](https://github.com/component/t) but extends it
with some useful utilities to handle multiple languages. Also handles inheritance.

### t.definition(code)

Returns the definition of a language.

```json
{
	"code": "de-at",
	"language": "Deutsch (Österreich)",
	"inherits": "de"
}
```

### t.definition(object)

Creates a new language definition, takes care of inheritance. See above for example.

### t.merge(code, object)

Merges the strings given in `object` to the ones already defined in language `code`.

## License

  LGPLv3

