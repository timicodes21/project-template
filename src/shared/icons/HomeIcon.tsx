import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

interface IProps extends SvgProps {
  active?: boolean;
}

const HomeIcon: React.FC<IProps> = ({active, ...props}) => {
  return active ? (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#EF5DA8"
          d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 0 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6l-7-5.25Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  ) : (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        stroke="#EF5DA8"
        d="M12 2.75c.325 0 .64.105.9.3l7 5.25a1.5 1.5 0 0 1 .6 1.2V19a1.5 1.5 0 0 1-1.5 1.5h-3.9a.6.6 0 0 1-.6-.6V15a2.5 2.5 0 0 0-5 0v4.9a.6.6 0 0 1-.6.6H5A1.5 1.5 0 0 1 3.5 19V9.5a1.5 1.5 0 0 1 .6-1.2l7-5.25a1.5 1.5 0 0 1 .9-.3Z"
      />
    </Svg>
  );
};
export default HomeIcon;
