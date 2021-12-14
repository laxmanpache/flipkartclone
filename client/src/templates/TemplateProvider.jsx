// import React, { Children, createContext, useContext } from 'react'
import { createTheme } from '@material-ui/core'
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// const templatecontext=createContext();
//  const TemplateProvider = ({Children}) => {
     const theme=createTheme({
       overrides:{
        MuiDialogContent:{
            root:{
             '&:first-child':{

                 paddingTop:0
             },
            
                 padding:0,
            
                
            }
            
        },
        MuiTableCell:{
            root:{
                borderBottom:"none"
            }
        }
       }
     })
    //  return(
    //       <templatecontext.Provider>

    //        <ThemeProvider theme={theme}>
    //            <CssBaseline/>
    //            {Children}
    //        </ThemeProvider>
    //       </templatecontext.Provider>
    //  )
// }

export default theme;
