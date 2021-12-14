import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Cart from './components/card/Cart';
import ProductDetail  from './components/itemDetails/ProductDetail';
// import TemplateProvider from './templates/TemplateProvider';
import { ThemeProvider } from '@material-ui/styles';
import theme from './templates/TemplateProvider';
import ContextProvider from './contaxt/ContextProvide.jsx';
import { Box } from '@material-ui/core';
import More from './components/more/More';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Header />
          <Box style={{marginTop:55}}>
          <Switch>
            <Route exact path='/' component={Home} />
          
            <Route path="/cart" component={Cart} />
         
            <Route exact path="/product/:id" component={ProductDetail}/>
            <Route exact path="/more" component={More} />
            <Route component={PageNotFound}/>
          </Switch>
          </Box>
        </Router>
       </ContextProvider> 
      </ThemeProvider>
    </>
  );
}

export default App;
