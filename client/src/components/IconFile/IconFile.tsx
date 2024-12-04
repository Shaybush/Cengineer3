import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isStringEmptyUtil } from '../../core/services/string.service';
import { iconConfig } from '../../core/config/icon.config';
import LoaderSpinner from '../LoaderSpinner';

const UNDEFINED_SRC = '';

interface IIconFileModel {
  styleClass?: string;
  width?: number;
  height?: number;
  iconSrc: string;
  link?: string;
}

const IconFile: FC<IIconFileModel> = ({ iconSrc, link, styleClass = '', width = 16, height = 16 }) => {
  const [icon, setIcon] = useState<string>(UNDEFINED_SRC);

  useEffect(() => {
    if (iconConfig[iconSrc]) {
      setIcon(iconConfig[iconSrc]);
    } else {
      setIcon(UNDEFINED_SRC); // fallback for undefined icon source
    }
  }, [iconSrc]);

	// loader
	if (isStringEmptyUtil(icon)) return <LoaderSpinner />

  return (
    <>
       {link ? (
        <Link to={link}>
          <img className={styleClass} src={icon} width={width} height={height} alt="icon" />
        </Link>
      ) : (
        <img className={styleClass} src={icon} width={width} height={height} alt="icon" />
      )}
    </>
  );
};

export default IconFile;
