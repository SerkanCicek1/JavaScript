let a = 10;
a = null;
a = undefined;
a = " ";
a = "";
a = 0;
a = 1;
a = NaN;
a = "false";
a = {salary: 5000}
a = {};
a = [];
a = [1, 2, 3];
a = Infinity;

if (a) {
    console.log(`${a} is a truthy value`);
}