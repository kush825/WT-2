import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Student_card(){
    const student = [{
        no:1,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADQQAAICAQICBgkDBQEAAAAAAAABAgMEBREhMRITIkFRYSMyNFJicoGR0UJxoRUzsbLBFP/EABgBAQEBAQEAAAAAAAAAAAAAAAADBAIB/8QAIREBAAICAgIDAQEAAAAAAAAAAAECAxExQRMhEjJRUkL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4+QBtLnyIORqdVb2rTsfiuRD1DMd03XW31a5v3iEXpi7lC+XqE6WqXt9mMIr9jH+p5PjH7EMFfHX8T+dv1Y1arJP0tafnFlhj5VWRH0cuPfF80c8ewlKElKDaa70cWxRPDquWY5dOCJg5SyK30uE16yJZmmNTpoidgAD0AAAAAAAAAAAhapc6sZqL7U3siaU+sz3vhDwjud443ZxedVV4ANjIAAAAAN2Hd1GRGf6eUv2OiRy/edFiT6zGrl4xRnzR2vht03AAguAAAAAAAAAAAUWq+2y+VF6UerLbMfnFFcP2Ty/VDABqZQAAAAAL3TPYq/r/llEX2mrbCq38G/5I5uFsXKUADM0AAAAAAAAAAAFXrNf9uxL4WWhqyaVfTKt965+B1SdTtzaNxpzgMpwlXNwmtpJ8TE28smtAADwAABJy7MVxfBHS1QVdcYrklsVOlY/WW9a12YcvNlyZs1tzppxV1GwAEVQAAAAAAAAAADw9NN2VTT69iT8O8a28mYhH1DC69Kde3WLx70U0ouEnGSaa7mdHVbC6CnB7xZhkY1WRHayO/g1zRWmSa+pTtji3uHPAs7NJe/oreHhJGC0m1+tZBFvLVLx2V5Iw8SeTNcGod8vwWFOl1Qadrdj+yJvZrh3KMUcWzfy7ri7krrjVBQgtopbJGZCr1LGnw6Ti/iRLhOM47xkpLxRCYmOVomOmQAPHoAAAAAAHgHpGysyrHW0uM+6KNOfnKldXW97P8AUp5NybbbbfNsrTH8vcpXya4ScjOvu4dLoQ92P5IoBpiIjhnmZnluxsq3Hfo3unzi+TLKrVKZL0ilB/dFODm2Osu63mHQRzcaXK6H1ewlmY8ed0foznwceCP115pXVup0RXY6U35IrsvNsyN4+rD3UyMDquKsObZLSGVc51y6VcnF+KMQUmNuFnjao1tHIW/xL8FnCcZxUotNPvRzJIxMqeNPdcYvnFkL4u4Vrknt0ANdNsba1OD3TNhnaAAACNnZH/npcv1PhFeZIKLUruuyWk+zDgv+neOvylxe2oRm3KTlJ7tvds8ANjIAAAAAAAAAAAAAAAD1L0/J6i7aT9HPg/LzLxcjmC802524yT9aHZZnzV/0tit0mA1Sm4NroyfhsgRW29vn1dM5+6mzm3xe7L3VJbYU/PZfyURfBHraGafegAF0QAAAAAAAAAAAAAAAAn6RZ0b3BvhNcPoQDfgy6OXU/i2+5zeN1l1WdS6EHiBibEPVvY38yKQA04fqzZfsAAskAAAAAAAAAAAAAAAAG7D9qq+dAHluJexzDoVyABhbX//Z",
        student_id:2323413,
        student_name:"hitesh",
        barnch:"CSE",
        semester:4
    },{
        no:2,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1AMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEBQIGB//EAC0QAQACAQIFAQcEAwAAAAAAAAABAgMEERIhMUFRYQUiMkJScZETgaGxI5Lx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAETMRHOWfJkmeUTyBbfLWvqqtktbvt6K9tugCd0AgAAJhACYtMfDOy2ub6lIo2RaJjeJ3Sx1tNJ3r/ANaMeSLRz5SCwAAAAAAAAAAABEztG6WfLfeZiOnkHnJbjnu8ojoIAAAPOTJTHG97REeoPQy211I+Glp+/J5jXx3xz/sDYKMWrw5J2m3DbxZo/cEAAk9UANGLJxRz6rWOJmJjZqx2i0KPQAAAAAAAAAK8tuGvqzRyWZbcVp9FYACAlCMlox0m89IBTqdTGGNoje/aPDmWtN5mbTMzJe1sl5vfrbmhQgAQ7NGm1M4bRF53p/TOA7VbRasTWd4mN0sXs7L1wz351bUUAAe8V+C0eJ6vCVGwV4bb19YWAAAAAAAPN54azL0rzz7n3BnnqgEAABl9oT/hiv1S1MntKJ/TpMdpkHPCOgqAAAALNPbgz47eJdhxccTbJFfWHaFQAgAAtwTteY8tDJSdrQ1qAAAAAACjUdKwvUaj5fvIKQEAABVqafqYbRHWOcfstP6BxNthq1mmmlpvSN6T/DKqAAAJrW17RWkb2nsC/Q45vqIt2rzl1FWmwxgxxWOvzesrEUAAABMNcMjZCgAAAAAApzxyhcryx7kgzCUIAAAAG0TvvG8d2PNoYmZtinbftZtRvHef5Ucm2mzU+LHafs8xhyT0x2/Dr7x5j8m8eY/IOdi0WS3O/uR69W7Bgx4K7VjnPW0ve8eY/KYkABAAAABNedobIZcUb3hpUSAAAAAAiY3iYSAx2jhtMeOSF2evzKQBLza0UrNrdI6oF71x1m1piIjyw5dde0zGL3fWeqjUZpzZJtPT5Y9FSj1a9rTve0zPnd53AAAA3AFuPU5sfw24vS3OG7T6uuX3be7bx5cw6cwdsZdFqf1I/Tv8cdJ8w1oIBNY3nbyC7T12iZXIrHDWISoAAAAAAAAi0RNdpZLV4J2lsV5acXPuDN/EsPtHLPu46z23s3d+bk6q3FqL+k7AqnyAIAAAAAAAAmlppaJry2nd2cd+OlbR3hxXT0FuLTx6TsK0rsFfml4x04p9GjYEgAAAAAAAAAAAryY+Ln3fPZ4mM94tExO/d9Kz6nS49TX342t2tHUHz406nRZcHOY3p9VWaAABAAAAAHqlLXtw0rNreIB5h1PZWObYZ3iYiZ6ml9m7TF9Rzn6OzpxG0REcogUiIiNojZIAAAAAAAAAAAAAAAiY3li1ehwXpbJw8Noj5Z2AHFmNpmPAAgAAADX7P01M9v8AJNtvES7GHFjxV4cdIrEeAFWRzSAAAAAAAAAP/9k=",
        student_id:523462,
        student_name:"Raj",
        barnch:"Civil",
        semester:6
    },{
        no:3,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADQQAAICAQICBgkDBQEAAAAAAAABAgMEBREhMRITIkFRYSMyNFJicoGR0UJxoRUzsbLBFP/EABgBAQEBAQEAAAAAAAAAAAAAAAADBAIB/8QAIREBAAICAgIDAQEAAAAAAAAAAAECAxExQRMhEjJRUkL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4+QBtLnyIORqdVb2rTsfiuRD1DMd03XW31a5v3iEXpi7lC+XqE6WqXt9mMIr9jH+p5PjH7EMFfHX8T+dv1Y1arJP0tafnFlhj5VWRH0cuPfF80c8ewlKElKDaa70cWxRPDquWY5dOCJg5SyK30uE16yJZmmNTpoidgAD0AAAAAAAAAAAhapc6sZqL7U3siaU+sz3vhDwjud443ZxedVV4ANjIAAAAAN2Hd1GRGf6eUv2OiRy/edFiT6zGrl4xRnzR2vht03AAguAAAAAAAAAAAUWq+2y+VF6UerLbMfnFFcP2Ty/VDABqZQAAAAAL3TPYq/r/llEX2mrbCq38G/5I5uFsXKUADM0AAAAAAAAAAAFXrNf9uxL4WWhqyaVfTKt965+B1SdTtzaNxpzgMpwlXNwmtpJ8TE28smtAADwAABJy7MVxfBHS1QVdcYrklsVOlY/WW9a12YcvNlyZs1tzppxV1GwAEVQAAAAAAAAAADw9NN2VTT69iT8O8a28mYhH1DC69Kde3WLx70U0ouEnGSaa7mdHVbC6CnB7xZhkY1WRHayO/g1zRWmSa+pTtji3uHPAs7NJe/oreHhJGC0m1+tZBFvLVLx2V5Iw8SeTNcGod8vwWFOl1Qadrdj+yJvZrh3KMUcWzfy7ri7krrjVBQgtopbJGZCr1LGnw6Ti/iRLhOM47xkpLxRCYmOVomOmQAPHoAAAAAAHgHpGysyrHW0uM+6KNOfnKldXW97P8AUp5NybbbbfNsrTH8vcpXya4ScjOvu4dLoQ92P5IoBpiIjhnmZnluxsq3Hfo3unzi+TLKrVKZL0ilB/dFODm2Osu63mHQRzcaXK6H1ewlmY8ed0foznwceCP115pXVup0RXY6U35IrsvNsyN4+rD3UyMDquKsObZLSGVc51y6VcnF+KMQUmNuFnjao1tHIW/xL8FnCcZxUotNPvRzJIxMqeNPdcYvnFkL4u4Vrknt0ANdNsba1OD3TNhnaAAACNnZH/npcv1PhFeZIKLUruuyWk+zDgv+neOvylxe2oRm3KTlJ7tvds8ANjIAAAAAAAAAAAAAAAD1L0/J6i7aT9HPg/LzLxcjmC802524yT9aHZZnzV/0tit0mA1Sm4NroyfhsgRW29vn1dM5+6mzm3xe7L3VJbYU/PZfyURfBHraGafegAF0QAAAAAAAAAAAAAAAAn6RZ0b3BvhNcPoQDfgy6OXU/i2+5zeN1l1WdS6EHiBibEPVvY38yKQA04fqzZfsAAskAAAAAAAAAAAAAAAAG7D9qq+dAHluJexzDoVyABhbX//Z",
        student_id:6542367,
        student_name:"Ram",
        barnch:"B.Tech",
        semester:6
    },{
        no:4,
        image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1AMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEBQIGB//EAC0QAQACAQIFAQcEAwAAAAAAAAABAgMEERIhMUFRYQUiMkJScZETgaGxI5Lx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAETMRHOWfJkmeUTyBbfLWvqqtktbvt6K9tugCd0AgAAJhACYtMfDOy2ub6lIo2RaJjeJ3Sx1tNJ3r/ANaMeSLRz5SCwAAAAAAAAAAABEztG6WfLfeZiOnkHnJbjnu8ojoIAAAPOTJTHG97REeoPQy211I+Glp+/J5jXx3xz/sDYKMWrw5J2m3DbxZo/cEAAk9UANGLJxRz6rWOJmJjZqx2i0KPQAAAAAAAAAK8tuGvqzRyWZbcVp9FYACAlCMlox0m89IBTqdTGGNoje/aPDmWtN5mbTMzJe1sl5vfrbmhQgAQ7NGm1M4bRF53p/TOA7VbRasTWd4mN0sXs7L1wz351bUUAAe8V+C0eJ6vCVGwV4bb19YWAAAAAAAPN54azL0rzz7n3BnnqgEAABl9oT/hiv1S1MntKJ/TpMdpkHPCOgqAAAALNPbgz47eJdhxccTbJFfWHaFQAgAAtwTteY8tDJSdrQ1qAAAAAACjUdKwvUaj5fvIKQEAABVqafqYbRHWOcfstP6BxNthq1mmmlpvSN6T/DKqAAAJrW17RWkb2nsC/Q45vqIt2rzl1FWmwxgxxWOvzesrEUAAABMNcMjZCgAAAAAApzxyhcryx7kgzCUIAAAAG0TvvG8d2PNoYmZtinbftZtRvHef5Ucm2mzU+LHafs8xhyT0x2/Dr7x5j8m8eY/IOdi0WS3O/uR69W7Bgx4K7VjnPW0ve8eY/KYkABAAAABNedobIZcUb3hpUSAAAAAAiY3iYSAx2jhtMeOSF2evzKQBLza0UrNrdI6oF71x1m1piIjyw5dde0zGL3fWeqjUZpzZJtPT5Y9FSj1a9rTve0zPnd53AAAA3AFuPU5sfw24vS3OG7T6uuX3be7bx5cw6cwdsZdFqf1I/Tv8cdJ8w1oIBNY3nbyC7T12iZXIrHDWISoAAAAAAAAi0RNdpZLV4J2lsV5acXPuDN/EsPtHLPu46z23s3d+bk6q3FqL+k7AqnyAIAAAAAAAAmlppaJry2nd2cd+OlbR3hxXT0FuLTx6TsK0rsFfml4x04p9GjYEgAAAAAAAAAAAryY+Ln3fPZ4mM94tExO/d9Kz6nS49TX342t2tHUHz406nRZcHOY3p9VWaAABAAAAAHqlLXtw0rNreIB5h1PZWObYZ3iYiZ6ml9m7TF9Rzn6OzpxG0REcogUiIiNojZIAAAAAAAAAAAAAAAiY3li1ehwXpbJw8Noj5Z2AHFmNpmPAAgAAADX7P01M9v8AJNtvES7GHFjxV4cdIrEeAFWRzSAAAAAAAAAP/9k=",
        student_id:536254,
        student_name:"Rahul",
        barnch:"BSC",
        semester:6
    }]
    return(
        <>
            <div className="container">
            <div className="row">

        {student.map((stu,i)=>{
            return(
                <div className="card col-3" style={{width:"18rem"}}>
                <div className="card-body">
                    <img src={stu.image} alt="" /><br/><br/>
                  <h5 className="card-title">Student ID : {stu.student_id}</h5>
                  <p className="card-text">Student Name : {stu.student_name}</p>
                  <p className="card-text">Branch : {stu.barnch}</p>
                  <p className="card-text">Semester : {stu.semester}</p>
                  <button>submit</button>
                </div>
              </div>
            )   
        })}
        </div>
        </div>
        </>
    )
}

export default Student_card;