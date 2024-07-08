import React from 'react';
import QrDisplay from './components/QrDisplay';

const App = () => {
  const Name = "Fathimath Sumayya O";
  const Biodata = "Assistant Professor, MES Kalladi Collge, Mannarkkad";

  return (
    <div>
      <QrDisplay Name={Name} Biodata={Biodata} />
    </div>
  );
};

export default App;

