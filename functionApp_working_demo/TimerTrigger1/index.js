// import { DefaultAzureCredential } from '@azure/identity'
// import { SecretClient } from '@azure/keyvault-secrets'

// import appConfig from '@azure/app-configuration'

export default async function (context,myTimer) {


  var timeStamp = new Date().toISOString();
    
  if (myTimer.isPastDue)
  {
      context.log('JavaScript is running late!');
  }
  context.log('JavaScript timer trigger function ran!', timeStamp);   

  

// //get the off set from the context


// context.log('latest offset - ' , context.bindings.myInputBlob)

//   var timeStamp = new Date().toISOString()

//   if (myTimer.isPastDue) {
//     context.log('JavaScript is running late!')
//   }
//   context.log('JavaScript timer trigger function ran!', timeStamp)


// //   //connect to platform keyvault and get particular secret 

// //   ///in platform keyvault we have
// //   // secret1
// // //secret2
// // //singleitem


// //   const url = process.env.KeyVault_URL
// //   const credential = new DefaultAzureCredential()
// //   const client = new SecretClient(url, credential)
// //   let latestSecret = await client.getSecret('singleitem')


//   // process.env['latestSecret'] = JSON.stringify(latestSecret)

//   // context.log('reading all config settings')
//   // context.log('latestSecret',process.env['latestSecret'] )



//   const configUrl = process.env.Config_URL
//   const appConfigClient = new appConfig.AppConfigurationClient(configUrl)

//   const allConfigs = appConfigClient.listConfigurationSettings()

//   for await (const setting of allConfigs) {
//     context.log(
//       `  Found key: ${setting.key}, label: ${
//         setting.label
//       }, value : ${JSON.stringify(setting.value)}`
//     )
//     process.env[setting.key] = JSON.stringify(setting.value)
//   }


// const newOffset = {
//   timerState : {
//     offset: 12 * Math.random()
//   }
// }

// context.bindings.myOutputBlob = newOffset

  //save the offset back to context for the nexxt run
}
