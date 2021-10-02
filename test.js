const app = require("./app");

var assert = require('assert');


/* Minimum number of bills  function: Rends l'argent ! */

describe("Minimal bills", function() {
    it("Works", function() {
      assert.equal(app.minBills([500, 200, 100, 50, 20, 10, 5], 700),2);
    }); 
});

describe("Minimal bills", function() {
    it("Works", function() {
      assert.equal(app.minBills([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], 626.5), 6);
    }); 
});

describe("Minimal bills", function() {
    it("Works", function() {
      assert.equal(app.minBills([500, 200, 100, 50, 20, 10, 5], 626.5), -1);
    }); 
});

describe("Minimal bills", function() {
    it("Works", function() {
      assert.equal(app.minBills([1], 1), 1);
    }); 
});


/* Maximum number of consecutive function: Des 1 et des 0 à devenir fou ! */

describe("Maximum number of Zeros", function() {
    it("Works", function() {
      assert.equal(app.maxZeros(123456), 6);
    }); 
});

describe("Maximum number of Zeros", function() {
    it("Works", function() {
      assert.equal(app.maxZeros(65535), 0);
    }); 
});

describe("Maximum number of Zeros", function() {
    it("Works", function() {
      assert.equal(app.maxZeros(5), 1);
    }); 
});

describe("Maximum number of Zeros", function() {
    it("Works", function() {
      assert.equal(app.maxZeros(0), 1);
    }); 
});


/* Maximum path function: Pic pic pic ! */

describe("Maximum Path", function() {
    it("Works", function() {
      assert.equal(app.maxPath([[1, 2, 3],
        [4, 5, 6],
        [7, 0, 9]]), 25);
    }); 
});

describe("Maximum Path", function() {
    it("Works", function() {
      assert.equal(app.maxPath([[0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]]), 3);
    }); 
});

describe("Maximum Path", function() {
    it("Works", function() {
      assert.equal(app.maxPath([[1]]),1);
    }); 
});

describe("Maximum Path", function() {
    it("Works", function() {
      assert.equal(app.maxPath([[1,1],[1,1]]),3);
    }); 
});

