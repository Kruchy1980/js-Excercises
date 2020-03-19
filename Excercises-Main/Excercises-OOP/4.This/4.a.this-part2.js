//WHY THE THIS IS NEEDED??
// EG
// Create funtion eg showName
function showName() {
    console.log(this.name);
}
// Create Object 1
const kate = {
        name: 'Kate',
        showName: showName,
    }
    // Create Object 2
const michael = {
        name: 'Michael',
        showName: showName,
    }
    // Check the name of objects
kate.showName();
michael.showName();

// WHEN THE CONNECTION OF THIS ARISES??
// 1. Create function 1
function one() {
    this.name = 'pierwsza';
}
// 2. callback function one
one();