export const filter = (arr, filterObj) => {
  const newArr = [];
 
  arr.filter(el => {
    let last = null;
    let lIndex = "";
    for (let i in filterObj) {
      if(Object.keys(filterObj).length<= 1) {
        if(el[i] === filterObj[i]) {
          newArr.push(el);
        }
      }
      
      if(last !== null) {
        if(last[lIndex] === filterObj[lIndex] && el[i] === filterObj[i]) {
          newArr.push(last);
        }
      }
      
      last = el;
      lIndex = i;
    }
    
    return 9;
  });
 
  return newArr;
};

export const paginate = (arr, page = 1, limit) => {
    // Round up to the nearest decimal
    const size = Math.ceil(arr.length/limit);
    let arrs = [];
    
    for(let i = 0; i<size; i++) {
      arrs.push(i)
    };
    //alert(arrs)
    const s = (page-1)*limit;
    return [arr.splice(s, limit), arrs];
  };