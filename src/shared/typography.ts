import { css, styled } from 'styled-components';

type H1Props = {
  $grey?: boolean;
};

export const H1 = styled.h1<H1Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 3.35rem;
  font-weight: 500;
  line-height: 4rem;
  margin: 0;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    return props.theme.colors.textPrimary;
  }};
`;

export const H2 = styled.h2`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 2.725rem;
  font-weight: 500;
  line-height: 3.25rem;
  margin: 0;

  color: ${(props) => {
    return props.theme.colors.textPrimary;
  }};
`;

export const H3 = styled.h3`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 2.35rem;
  font-weight: 500;
  line-height: 2.875rem;
  margin: 0;

  color: ${(props) => {
    return props.theme.colors.textPrimary;
  }};
`;

export const H4 = styled.h4`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.975rem;
  font-weight: 500;
  line-height: 2.25rem;
  margin: 0;

  color: ${(props) => {
    return props.theme.colors.textPrimary;
  }};
`;

type H5Props = {
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
  yellow?: boolean;
};

export const H5 = styled.h5<H5Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.475rem;
  font-weight: 600;
  line-height: 1.625rem;
  margin: 0;
  letter-spacing: 0.006875rem;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.green) return props.theme.colors.greenDefault;
    if (props.red) return props.theme.colors.redDefault;
    if (props.yellow) return props.theme.colors.yellowDark;
    return props.theme.colors.textPrimary;
  }};
`;

export const H5OneLine = styled(H5)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type H6Props = {
  $grey?: boolean;
  lightGrey?: boolean;
  green?: boolean;
  red?: boolean;
};

export const H6 = styled.h6<H6Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin: 0;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    if (props.lightGrey) return props.theme.colors.textTertiary;
    if (props.green) return props.theme.colors.greenDefault;
    return props.theme.colors.textPrimary;
  }};
`;

export const H6OneLine = styled(H6)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
  width: 100%;
`;

type Subtitle1Props = {
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
};

export const Subtitle1 = styled.h6<Subtitle1Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.225rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    if (props.green) return props.theme.colors.greenDefault;
    return props.theme.colors.textPrimary;
  }};
`;

export const Subtitle1OneLine = styled(Subtitle1)`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type Subtitle2Props = {
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
  white?: boolean;
  yellow?: boolean;
};

export const Subtitle2 = styled.h6<Subtitle2Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0.005rem;
  margin: 0;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    if (props.white) return props.theme.colors.whiteDefault;
    if (props.green) return props.theme.colors.greenDefault;
    if (props.yellow) return props.theme.colors.yellowDark;
    return props.theme.colors.textPrimary;
  }};
`;

export const Subtitle2OneLine = styled(Subtitle2)`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type Body1Props = {
  $noSpacing?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
  black?: boolean;
  white?: boolean;
  yellow?: boolean;
};

export const Body1 = styled.p<Body1Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.0375rem;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
  margin-bottom: ${(props) => (props.$noSpacing ? '0' : '0.5em')};

  color: ${(props) => {
    if (props.disabled) return props.theme.colors.textTertiary;
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.green) return props.theme.colors.greenDefault;
    if (props.red) return props.theme.colors.redDefault;
    if (props.black) return props.theme.colors.blackDefault;
    if (props.white) return props.theme.colors.whiteDefault;
    if (props.yellow) return props.theme.colors.yellowDark;
    return props.theme.colors.textPrimary;
  }};
`;

export const Body1OneLine = styled(Body1)`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type Body2Props = {
  $noSpacing?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  red?: boolean;
};

export const Body2 = styled.p<Body2Props>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 0.975rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: 0.004375rem;
  margin: 0;
  margin-bottom: ${(props) => (props.$noSpacing ? '0' : '0.375em')};

  color: ${(props) => {
    if (props.disabled) return props.theme.colors.textTertiary;
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    return props.theme.colors.textPrimary;
  }};
`;

export const Body2OneLine = styled(Body2)`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type CaptionProps = {
  $noSpacing?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  red?: boolean;
  green?: boolean;
  white?: boolean;
  black?: boolean;
  yellow?: boolean;
};

export const Caption = styled.p<CaptionProps>`
  font-size: 0.975rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.0121875rem;
  margin: 0;
  margin-bottom: ${(props) => (props.$noSpacing ? '0' : '0.625em')};

  color: ${(props) => {
    if (props.disabled) return props.theme.colors.textTertiary;
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    if (props.green) return props.theme.colors.greenDefault;
    if (props.white) return props.theme.colors.whiteDefault;
    if (props.black) return props.theme.colors.blackDefault;
    if (props.yellow) return props.theme.colors.yellowDark;
    return props.theme.colors.textPrimary;
  }};
`;

export const CaptionOneLine = styled(Caption)`
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: top;
`;

type KeyProps = {
  $mini?: boolean;
};

export const Key = styled(Body1)<KeyProps>`
  height: auto;
  width: min-content;
  padding: 0.15rem 0.6rem;
  margin-bottom: 0;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.colors.grey4};

  ${(props) =>
    props.$mini &&
    css`
      font-size: 0.8rem;
      line-height: 0.8225rem;
      padding: 0.15rem 0.4rem;
    `}
`;

type ButtonTextProps = {
  $disabled?: boolean;
};

export const NavButtonText = styled.p<ButtonTextProps>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1.3rem;
  line-height: 1.325rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => {
    if (props.$disabled) return props.theme.colors.textTertiary;
    return props.theme.colors.textPrimary;
  }};
  overflow: hidden;
  vertical-align: top;
`;

export const ButtonText = styled.p<ButtonTextProps>`
  /* font-family: ${(props) => props.theme.fonts.BalooThambi2}; */
  font-size: 1rem;

  font-weight: 500;
  line-height: 1.025rem;
  margin: 0;
  color: ${(props) => {
    if (props.$disabled) return props.theme.colors.textTertiary;
    return props.theme.colors.textPrimary;
  }};
  overflow: hidden;
  vertical-align: top;
`;
