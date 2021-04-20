app = angular.module("colorPickerApp", []);
app.controller("colorPickerCtrl", function ($scope) {
    $scope.red = 255;
    $scope.blue = 255;
    $scope.green = 255;
    $scope.hue = function () {
        let r = $scope.red / 255;
        let g = $scope.green / 255;
        let b = $scope.blue / 255;
        let max = maxim(r, g, b);
        let cmax = 0;
        if (max == 0)
            cmax = r;
        else if (max == 1)
            cmax = g;
        else
            cmax = b;
        let min = minim(r, g, b)
        let cmin = 0;
        if (min == 0)
            cmin = r;
        else if (min == 1)
            cmin = g;
        else
            cmin = b;
        let delta = cmax - cmin;
        if (delta == 0)
            return 0;
        else if (max[0] == 0)
            return Math.floor(60 * (Math.abs((g - b)) / delta) % 6);
        else if (max[0] == 1)
            return Math.floor(60 * (Math.abs((b - r)) / delta) + 2);
        return Math.floor(60 * (Math.abs((r - g)) / delta) + 4);
    };
    $scope.sat = function () {
        let r = $scope.red / 255;
        let g = $scope.green / 255;
        let b = $scope.blue / 255;
        let max = maxim(r, g, b);
        let cmax = 0;
        if (max == 0)
            cmax = r;
        else if (max == 1)
            cmax = g;
        else
            cmax = b;
        let min = minim(r, g, b)
        let cmin = 0;
        if (min == 0)
            cmin = r;
        else if (min == 1)
            cmin = g;
        else
            cmin = b;
        let delta = cmax - cmin;
        let l = (cmax + cmin) / 2;
        if (delta == 0)
            return 0;
        return Math.floor(100 * (delta / (1 - Math.abs(2 * l - 1))));
    };
    $scope.light = function () {
        let r = $scope.red / 255;
        let g = $scope.green / 255;
        let b = $scope.blue / 255;
        let max = maxim(r, g, b);
        let cmax = 0;
        if (max == 0)
            cmax = r;
        else if (max == 1)
            cmax = g;
        else
            cmax = b;
        let min = minim(r, g, b)
        let cmin = 0;
        if (min == 0)
            cmin = r;
        else if (min == 1)
            cmin = g;
        else
            cmin = b;
        return Math.floor(100 * (cmax + cmin) / 2);

    }
    $scope.hex = function () {
        let r = $scope.red.toString(16);
        let g = $scope.green.toString(16);
        let b = $scope.blue.toString(16);
        r = padded(r);
        g = padded(g);
        b = padded(b);
        return "#" + r + g + b;
    }
    $scope.colorlists = [
        { colorName: "Black", colorCode: "#000000" },
        { colorName: "Magenta", colorCode: "#ffff00" },
        { colorName: "Red", colorCode: "#ff0000" },
        { colorName: "Cyan", colorCode: "#00ffff" },
        { colorName: "Blue", colorCode: "#00ff00" },
        { colorName: "Yellow", colorCode: "#00ffff" },
        { colorName: "Green", colorCode: "#0000ff" },
        { colorName: "White", colorCode: "#ffffff" },

    ];
    $scope.addColor = function () {
        let colorname = $scope.colorName;
        let colorhex = $scope.hex();
        $scope.colorlists.push({ colorName: colorname, colorCode: colorhex });
    };
});