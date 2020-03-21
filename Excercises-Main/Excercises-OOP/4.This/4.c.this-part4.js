// THE LOOSE BINDING PROBLEMS
// Create object
const azor = {
    children: ['Fafik', 'Muszka'],
    showChildren: function() {
        // The this is an array here when forEach calls next function
        this.children.forEach(function(child, index) {
            // Not universal solution
            console.log(azor.children[index]);
            // console.log(this.chilren[index]);
            // Just cjheck what the this is
            // console.log(this); //this is the problem fof loosing binding because is using th defined global this
        })
    },
}

azor.showChildren();

// SOLUTION
// 1. that = this
const azor1 = {
    children: ['Fafik', 'Muszka'],
    showChildren: function() {
        // Assign this to for example that
        const that = this;
        // /check
        console.log(that);
        // The this is an array here when forEach calls next function
        // here this is ok we can check
        console.log(this);
        // so on the beginning we can use our this easily
        this.children.forEach(function(child, index) {
            // 1.First solution
            console.log(that.children[index]);
        })
    },
}

azor1.showChildren();

// 2. Without function - with for of loop
const azor2 = {
    children: ['Fafik', 'Muszka'],
    showChildren: function() {
        //  for (what of this.(which array)) {...}
        for (child of this.children) {
            console.log(child);
        }
    },
}

azor2.showChildren();

// 3. Arrow function.
const azor3 = {
    children: ['Fafik', 'Muszka'],
    showChildren: function() {
        // Use arrow function as the second function
        this.children.forEach((child, index) => {
            // Not universal solution
            console.log(this.children[index]);
        })
    },
}

azor3.showChildren();


//4. Bind
const azor4 = {
    children: ['Fafik', 'Muszka'],
    showChildren: function() {
        // We need to bind the function inside forEach function
        this.children.forEach(function(child, index) {
                console.log(this.children[index]);
                // and now we can bind it
            }.bind(this)) // ==> bindes the function with specified this = our object (azor4)
            // bind --> returns
            // function(child, index) {
            //     console.log(this.children[index]);
            // }
    },
}

azor4.showChildren();