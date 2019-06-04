module.exports = {
    hooks: {
        readPackage
    }
};

function readPackage (pkg, context) {
    if (pkg.name === 'example') {
        Object.assign(pkg.dependencies, {
            'string-format': '*'
        });
        Object.assign(pkg.peerDependencies, {
            'npm-package-example': '*'
        });
    }

    return pkg;
}
