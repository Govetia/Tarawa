import Layout from '@/components/layout';
import '@/internationalization/i18n';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import '../src/theme/stylesheet.css'
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
