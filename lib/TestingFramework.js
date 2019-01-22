
const describe = (description, funct) => {
  console.log(description);
  funct();
};

const it = (description, funct) => {
  console.log(description);
  funct();
};

const toBeIdenticalTo = (object1, object2) => {
  if (object1 === object2) {
    console.log(`%c Pass!`, 'color: #009200')
  } else {
    console.log('fail')
    console.log(object1 + ' is not identical to ' + object2)
  };
};

const matchers = (exp) => ({

  toBeIdenticalTo: (assertion) => {
    if (exp === assertion) {
      console.log(`%c Pass!`, 'color: #009200')
    } else {
      console.log(exp + ' is not identical to '+ assertion)
    }
  },

  toThrowError: (assertion) => {
    var error;
    try {
      exp();            //LOOK AT PARAMETER OF const matchers
    }
    catch(e) {
      error = e.message // message is an in-built method in JS
    }
    toBeIdenticalTo(error, assertion)
  }
})

expect = (exp) => matchers(exp)





