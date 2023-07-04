const EmojiRepeater = ({ emoji, times }) => {
  const repeatedEmoji = emoji.repeat(times);

  return <div>{repeatedEmoji}</div>;
};

export default EmojiRepeater;
