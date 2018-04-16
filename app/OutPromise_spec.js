const OutPromise = require('./OutPromise')

describe("OutPromise", function() {
  
  beforeEach(function() {
    jasmine.addMatchers({
      toBeInstanceOf: function(util, customEqualityTesters){
        return {
          compare: function(actual, expected) {
            var result = {}
            result.pass = actual instanceof expected
            if (result.pass) result.message = "Expected " + actual + " is instance of " + expected;
            else result.message = "Expected " + actual + " is not instance of " + expected;
            return result
          }
        }
      }
    });
  });
  

  it("Should implement 'resolve' and 'then' methods",()=>{
    let op = new OutPromise()
    
    expect(op.resolve).toBeInstanceOf(Function)
    expect(op.then).toBeInstanceOf(Function)

    expect(op.resolve('hi there')).toBeInstanceOf(OutPromise)

    expect(op.then(resolved=>{
      
      expect(resolved).toEqual('hi there')
    
    })).toBeInstanceOf(Promise)

    
    
  })

  it("Should chain resolve and then methods",()=>{    
    new OutPromise().resolve('hi there').then(resolved=>{
      expect(resolved).toEqual('hi there')
    })
  })

})
