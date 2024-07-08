import { useState } from 'react';

import Stats from './Stats';
import TextArea from './TextArea';
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from '../lib/constants';

const Container = () => {
  const [text, setText] = useState('');

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== '').length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharacterLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
