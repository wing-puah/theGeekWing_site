interface KeyPathnameMapper {
  key: string;
  pathname: string;
}

export const moduleAlias: KeyPathnameMapper[] = [
  { key: 'layouts', pathname: 'layouts' },
  { key: 'pages', pathname: 'pages' },
  { key: 'components', pathname: 'components' },
  { key: 'styles', pathname: 'components/styles' },
  { key: 'UI', pathname: 'components/UI' },
];