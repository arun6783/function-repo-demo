export default async function (context, myTimer) {
    try {
      var timeStamp = new Date().toISOString()
  
      if (myTimer.isPastDue) {
        context.log('JavaScript is running late for2!')
      }
      context.log('JavaScript timer trigger for2 function ran!', timeStamp)
  
      if(context.bindings.myInputBlob){
      context.log('input blob for2', JSON.stringify(context.bindings.myInputBlob))
      }else{
        context.log('input blob for2 is undefined')

      }
  
      const newOffset = {
        timerState: {
          offset: 12 * Math.random(),
        },
      }
  
      context.bindings.myOutputBlob = newOffset
      context.log('updated the offset for2!!')
    } catch (e) {
      context.log.error('error occured for2 ', e)
    }
  }
  