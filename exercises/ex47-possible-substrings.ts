
const getAllSubstrings = (text: string): string[] => {

    let substrings: string[] = [];

    // for( let i = 0; i < text.length; i++ ) {
    //     for( let j = 1; j <= text.length; j++ ) {
    //         if(i >= j) continue;
    //         substrings.push(text.substring(i, j));
    //     }
    // }

    for( let i in text.split('') ) {
        let index = parseInt(i);
        for( let j = 1; j <= text.length; j++ ) {
            if(index >= j) continue;
            substrings.push(text.substring(index, j));
        }
    }
    

    return substrings;
}

export default getAllSubstrings;