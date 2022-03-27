
// This places the items equidistantly on a circle
const findItemPositionsOnCircle = (itemsCount: number, radius: number)=>{

    const positions: [number,number][] = [];
    const angleDifference = (2*Math.PI)/itemsCount;

    [...Array(itemsCount).keys()].map(idx=>{
        
        const angle = 0 + angleDifference*idx;
        console.log(angle);
        const pos = [radius*Math.cos(angle),radius*Math.sin(angle)] as [number,number]

        positions.push(pos);

    })

    return positions;
    
}

export {findItemPositionsOnCircle};