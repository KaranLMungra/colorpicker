function maxim(r, g, b) {
    if (r >= g && r >= b)
        return 0;
    else if (g >= r && g >= b)
        return 1;
    else
        return 2;
}
function minim(r, g, b) {
    if (r <= g && r <= b)
        return 0;
    else if (g <= r && g <= b)
        return 1;
    else
        return 2;
}

function padded(r) {
    if (r.length == 1)
        return '0' + r;
    return r;
}