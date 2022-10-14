import {createBuilder} from '@angular-devkit/architect';

function asyncThrowError() {
    return new Promise<{ success: boolean }>( (resolve,reject) => {
        setTimeout(reject, 5000)
    });
}

async function throwError() {
    console.log('Starting timeout');
    await new Promise((
        resolve) => {
        setTimeout(resolve, 5000)
    });
    console.log('After timeout');
    throw new Error("This builder always throws");

    return {success: true};
}

export default createBuilder(asyncThrowError);
