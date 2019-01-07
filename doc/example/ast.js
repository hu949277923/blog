{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 1,
            "raw": "1"
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 26,
      "expression": {
        "type": "CallExpression",
        "start": 12,
        "end": 26,
        "callee": {
          "type": "MemberExpression",
          "start": 12,
          "end": 23,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "name": "log"
          },
          "computed": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "a"
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}