export  const objectToArrayString = <D extends object>(obj: D): string[] => 
      Object.entries(obj).filter((objs) => objs[1]!==undefined ).map( obj => obj.join('-'))


