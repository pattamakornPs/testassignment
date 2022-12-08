import data from '../assets/data/example_data.json'
import { format } from 'date-fns';
export const dataload = (payload:any) => {
    var selectdata:any = []
    data.map((key)=>{
        key.categories.map((keys)=>{
            if (String(keys) === String(payload)) {
                selectdata.push(key)
            }
        })
    })
    var indexpage = 0
    var indexoffset = 0
    var dataset:any = []
    selectdata.map((key:any,index:any)=>{
        if (indexpage == 0) {
            dataset.push([])
        }
        dataset[indexoffset].push(key)
        indexpage+=1
        if (indexpage == 9) {
            indexpage = 0
            indexoffset += 1
        }
    })
    var len = selectdata.length
    console.log(Math.ceil(len/9));
    const dataarray = {
        data:dataset,
        all:selectdata,
        totalpage:Math.ceil(len/9),
        totaldata:len
    }

    console.log(dataarray);
    
    
    return dataarray
    
}


export function search(nameKey:any, myArray:any){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].day === nameKey) {
            return myArray[i];
        }
    }
}
export function searchrestaurant(idkey:any,nameKey:any, myArray:any){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey && myArray[i].id === idkey) {
            return myArray[i];
        }
    }
}
export const dateop = (data:any) => {
  var operation_time = data.operation_time
  const resultObject = search(String(format(new Date(), 'eeee')), operation_time);
  return `${format(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${resultObject.time_open}`), 'h:mm a')} - ${format(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${resultObject.time_close}`), 'h:mm a')}`
}

export const dataloadbyid = async (id:string,name:string) => {
    const resultObject = await searchrestaurant(Number(id),name, data);
    return resultObject
}