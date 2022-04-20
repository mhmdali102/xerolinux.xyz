import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Buttons from "./Buttons";

const Credit = () => {
  return (
    <Div className="container">
      <Box>
        <Content>
          <P>
            This distro wouldn't have been as great as it is today without the
            help & input from
          </P>
          <Buttons mb="1rem">
            <a
              href="https://www.youtube.com/channel/UCd25qu9gyUpzE8GcjmgeAPQ"
              target="blank"
              rel="noreferrer"
            >
              <Button
                text="GamerKing64"
                primary
                themed
                fz="var(--fz-6)"
                icon={
                  <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
                    <g clipPath="url(#clip0_82_14)">
                      <path
                        d="M27.0511 5.78955C25.0791 4.90024 22.9654 4.24293 20.755 3.86916C20.7353 3.86538 20.7149 3.86782 20.6967 3.87613C20.6784 3.88444 20.6632 3.89822 20.6532 3.91556C20.3825 4.39115 20.0809 5.01109 19.8696 5.50085C17.5252 5.15059 15.1419 5.15059 12.7976 5.50085C12.5622 4.95806 12.2967 4.42881 12.0024 3.91556C11.9924 3.89801 11.9773 3.88392 11.9591 3.87517C11.9409 3.86641 11.9205 3.86342 11.9006 3.86658C9.69145 4.24035 7.57773 4.89767 5.60449 5.78827C5.58751 5.79539 5.57312 5.80753 5.56325 5.82306C1.55233 11.7196 0.452932 17.4705 0.992962 23.1492C0.994465 23.1631 0.998782 23.1765 1.00565 23.1887C1.01252 23.2009 1.0218 23.2116 1.03292 23.22C3.37399 24.9245 5.98514 26.2228 8.75703 27.0608C8.77636 27.0668 8.79702 27.0668 8.81634 27.0608C8.83565 27.0548 8.85271 27.0431 8.8653 27.0273C9.46177 26.2296 9.99034 25.3833 10.4454 24.4973C10.4518 24.4852 10.4554 24.4719 10.4561 24.4582C10.4568 24.4446 10.4546 24.4309 10.4496 24.4182C10.4446 24.4055 10.4369 24.394 10.4271 24.3845C10.4172 24.3751 10.4055 24.3678 10.3926 24.3633C9.56 24.0497 8.75328 23.6714 7.97985 23.2316C7.96596 23.2237 7.95424 23.2125 7.94577 23.1989C7.9373 23.1853 7.93233 23.1698 7.93131 23.1539C7.93028 23.1379 7.93324 23.1219 7.93992 23.1074C7.94659 23.0928 7.95677 23.0802 7.96954 23.0705C8.13194 22.9507 8.29433 22.8257 8.449 22.7006C8.46292 22.6894 8.47969 22.6822 8.49744 22.68C8.51519 22.6777 8.53322 22.6804 8.54953 22.6877C13.6109 24.9613 19.0924 24.9613 24.0944 22.6877C24.1108 22.6799 24.129 22.6769 24.147 22.6789C24.165 22.681 24.1821 22.6881 24.1962 22.6993C24.3509 22.8257 24.512 22.9507 24.6757 23.0705C24.6886 23.08 24.6989 23.0925 24.7058 23.1069C24.7127 23.1213 24.7159 23.1372 24.7152 23.1532C24.7144 23.1691 24.7097 23.1847 24.7014 23.1983C24.6932 23.212 24.6817 23.2235 24.668 23.2316C23.8972 23.675 23.0956 24.0501 22.2539 24.362C22.241 24.3667 22.2292 24.3741 22.2194 24.3837C22.2096 24.3933 22.2019 24.4049 22.1969 24.4177C22.1919 24.4305 22.1897 24.4442 22.1904 24.4579C22.1911 24.4717 22.1948 24.4851 22.2011 24.4973C22.6651 25.3827 23.1961 26.2257 23.7799 27.026C23.7921 27.0425 23.809 27.0547 23.8284 27.0612C23.8477 27.0677 23.8686 27.068 23.8882 27.0621C26.6649 26.2265 29.2803 24.9275 31.6239 23.22C31.6354 23.2121 31.645 23.2017 31.6521 23.1897C31.6592 23.1777 31.6636 23.1643 31.6652 23.1504C32.3096 16.585 30.5851 10.8805 27.091 5.82564C27.0824 5.80922 27.0683 5.79641 27.0511 5.78955ZM11.202 19.6912C9.67857 19.6912 8.42193 18.3134 8.42193 16.6237C8.42193 14.9327 9.65408 13.5562 11.202 13.5562C12.7615 13.5562 14.0065 14.9443 13.9821 16.6237C13.9821 18.3147 12.7499 19.6912 11.202 19.6912V19.6912ZM21.4806 19.6912C19.9559 19.6912 18.7006 18.3134 18.7006 16.6237C18.7006 14.9327 19.9314 13.5562 21.4806 13.5562C23.0401 13.5562 24.2852 14.9443 24.2607 16.6237C24.2607 18.3147 23.0414 19.6912 21.4806 19.6912V19.6912Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_14">
                        <rect
                          width="30.9326"
                          height="30.9326"
                          fill="white"
                          transform="translate(0.865234)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </a>
            <a
              href="https://github.com/alannxq"
              target="blank"
              rel="noreferrer"
            >
              <Button
                text="alan#1000"
                primary
                themed
                fz="var(--fz-6)"
                icon={
                  <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
                    <g clipPath="url(#clip0_82_14)">
                      <path
                        d="M27.0511 5.78955C25.0791 4.90024 22.9654 4.24293 20.755 3.86916C20.7353 3.86538 20.7149 3.86782 20.6967 3.87613C20.6784 3.88444 20.6632 3.89822 20.6532 3.91556C20.3825 4.39115 20.0809 5.01109 19.8696 5.50085C17.5252 5.15059 15.1419 5.15059 12.7976 5.50085C12.5622 4.95806 12.2967 4.42881 12.0024 3.91556C11.9924 3.89801 11.9773 3.88392 11.9591 3.87517C11.9409 3.86641 11.9205 3.86342 11.9006 3.86658C9.69145 4.24035 7.57773 4.89767 5.60449 5.78827C5.58751 5.79539 5.57312 5.80753 5.56325 5.82306C1.55233 11.7196 0.452932 17.4705 0.992962 23.1492C0.994465 23.1631 0.998782 23.1765 1.00565 23.1887C1.01252 23.2009 1.0218 23.2116 1.03292 23.22C3.37399 24.9245 5.98514 26.2228 8.75703 27.0608C8.77636 27.0668 8.79702 27.0668 8.81634 27.0608C8.83565 27.0548 8.85271 27.0431 8.8653 27.0273C9.46177 26.2296 9.99034 25.3833 10.4454 24.4973C10.4518 24.4852 10.4554 24.4719 10.4561 24.4582C10.4568 24.4446 10.4546 24.4309 10.4496 24.4182C10.4446 24.4055 10.4369 24.394 10.4271 24.3845C10.4172 24.3751 10.4055 24.3678 10.3926 24.3633C9.56 24.0497 8.75328 23.6714 7.97985 23.2316C7.96596 23.2237 7.95424 23.2125 7.94577 23.1989C7.9373 23.1853 7.93233 23.1698 7.93131 23.1539C7.93028 23.1379 7.93324 23.1219 7.93992 23.1074C7.94659 23.0928 7.95677 23.0802 7.96954 23.0705C8.13194 22.9507 8.29433 22.8257 8.449 22.7006C8.46292 22.6894 8.47969 22.6822 8.49744 22.68C8.51519 22.6777 8.53322 22.6804 8.54953 22.6877C13.6109 24.9613 19.0924 24.9613 24.0944 22.6877C24.1108 22.6799 24.129 22.6769 24.147 22.6789C24.165 22.681 24.1821 22.6881 24.1962 22.6993C24.3509 22.8257 24.512 22.9507 24.6757 23.0705C24.6886 23.08 24.6989 23.0925 24.7058 23.1069C24.7127 23.1213 24.7159 23.1372 24.7152 23.1532C24.7144 23.1691 24.7097 23.1847 24.7014 23.1983C24.6932 23.212 24.6817 23.2235 24.668 23.2316C23.8972 23.675 23.0956 24.0501 22.2539 24.362C22.241 24.3667 22.2292 24.3741 22.2194 24.3837C22.2096 24.3933 22.2019 24.4049 22.1969 24.4177C22.1919 24.4305 22.1897 24.4442 22.1904 24.4579C22.1911 24.4717 22.1948 24.4851 22.2011 24.4973C22.6651 25.3827 23.1961 26.2257 23.7799 27.026C23.7921 27.0425 23.809 27.0547 23.8284 27.0612C23.8477 27.0677 23.8686 27.068 23.8882 27.0621C26.6649 26.2265 29.2803 24.9275 31.6239 23.22C31.6354 23.2121 31.645 23.2017 31.6521 23.1897C31.6592 23.1777 31.6636 23.1643 31.6652 23.1504C32.3096 16.585 30.5851 10.8805 27.091 5.82564C27.0824 5.80922 27.0683 5.79641 27.0511 5.78955ZM11.202 19.6912C9.67857 19.6912 8.42193 18.3134 8.42193 16.6237C8.42193 14.9327 9.65408 13.5562 11.202 13.5562C12.7615 13.5562 14.0065 14.9443 13.9821 16.6237C13.9821 18.3147 12.7499 19.6912 11.202 19.6912V19.6912ZM21.4806 19.6912C19.9559 19.6912 18.7006 18.3134 18.7006 16.6237C18.7006 14.9327 19.9314 13.5562 21.4806 13.5562C23.0401 13.5562 24.2852 14.9443 24.2607 16.6237C24.2607 18.3147 23.0414 19.6912 21.4806 19.6912V19.6912Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_14">
                        <rect
                          width="30.9326"
                          height="30.9326"
                          fill="white"
                          transform="translate(0.865234)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </a>
            <a href="https://t.me/RoyMarkham" target="blank" rel="noreferrer">
              <Button
                text="RoyMarkham"
                primary
                themed
                fz="var(--fz-6)"
                icon={
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path
                      d="M28.921 5.9574L24.837 25.2177C24.5286 26.5768 23.7253 26.9152 22.5837 26.2753L16.3605 21.6895L13.3581 24.5778C13.0256 24.9104 12.7481 25.1878 12.1073 25.1878L12.5548 18.8505L24.0878 8.42911C24.5895 7.98252 23.9786 7.73409 23.3087 8.18164L9.05074 17.1598L2.91256 15.2381C1.57763 14.8215 1.55346 13.9032 3.19096 13.2623L27.1994 4.01252C28.3111 3.59589 29.2835 4.25998 28.921 5.95837V5.9574Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </a>
            <a
              href="https://twitch.tv/ripl3yplays"
              target="blank"
              rel="noreferrer"
            >
              <Button
                text="Ripl3yPlays"
                primary
                themed
                fz="var(--fz-6)"
                icon={
                  <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
                    <g clipPath="url(#clip0_82_14)">
                      <path
                        d="M27.0511 5.78955C25.0791 4.90024 22.9654 4.24293 20.755 3.86916C20.7353 3.86538 20.7149 3.86782 20.6967 3.87613C20.6784 3.88444 20.6632 3.89822 20.6532 3.91556C20.3825 4.39115 20.0809 5.01109 19.8696 5.50085C17.5252 5.15059 15.1419 5.15059 12.7976 5.50085C12.5622 4.95806 12.2967 4.42881 12.0024 3.91556C11.9924 3.89801 11.9773 3.88392 11.9591 3.87517C11.9409 3.86641 11.9205 3.86342 11.9006 3.86658C9.69145 4.24035 7.57773 4.89767 5.60449 5.78827C5.58751 5.79539 5.57312 5.80753 5.56325 5.82306C1.55233 11.7196 0.452932 17.4705 0.992962 23.1492C0.994465 23.1631 0.998782 23.1765 1.00565 23.1887C1.01252 23.2009 1.0218 23.2116 1.03292 23.22C3.37399 24.9245 5.98514 26.2228 8.75703 27.0608C8.77636 27.0668 8.79702 27.0668 8.81634 27.0608C8.83565 27.0548 8.85271 27.0431 8.8653 27.0273C9.46177 26.2296 9.99034 25.3833 10.4454 24.4973C10.4518 24.4852 10.4554 24.4719 10.4561 24.4582C10.4568 24.4446 10.4546 24.4309 10.4496 24.4182C10.4446 24.4055 10.4369 24.394 10.4271 24.3845C10.4172 24.3751 10.4055 24.3678 10.3926 24.3633C9.56 24.0497 8.75328 23.6714 7.97985 23.2316C7.96596 23.2237 7.95424 23.2125 7.94577 23.1989C7.9373 23.1853 7.93233 23.1698 7.93131 23.1539C7.93028 23.1379 7.93324 23.1219 7.93992 23.1074C7.94659 23.0928 7.95677 23.0802 7.96954 23.0705C8.13194 22.9507 8.29433 22.8257 8.449 22.7006C8.46292 22.6894 8.47969 22.6822 8.49744 22.68C8.51519 22.6777 8.53322 22.6804 8.54953 22.6877C13.6109 24.9613 19.0924 24.9613 24.0944 22.6877C24.1108 22.6799 24.129 22.6769 24.147 22.6789C24.165 22.681 24.1821 22.6881 24.1962 22.6993C24.3509 22.8257 24.512 22.9507 24.6757 23.0705C24.6886 23.08 24.6989 23.0925 24.7058 23.1069C24.7127 23.1213 24.7159 23.1372 24.7152 23.1532C24.7144 23.1691 24.7097 23.1847 24.7014 23.1983C24.6932 23.212 24.6817 23.2235 24.668 23.2316C23.8972 23.675 23.0956 24.0501 22.2539 24.362C22.241 24.3667 22.2292 24.3741 22.2194 24.3837C22.2096 24.3933 22.2019 24.4049 22.1969 24.4177C22.1919 24.4305 22.1897 24.4442 22.1904 24.4579C22.1911 24.4717 22.1948 24.4851 22.2011 24.4973C22.6651 25.3827 23.1961 26.2257 23.7799 27.026C23.7921 27.0425 23.809 27.0547 23.8284 27.0612C23.8477 27.0677 23.8686 27.068 23.8882 27.0621C26.6649 26.2265 29.2803 24.9275 31.6239 23.22C31.6354 23.2121 31.645 23.2017 31.6521 23.1897C31.6592 23.1777 31.6636 23.1643 31.6652 23.1504C32.3096 16.585 30.5851 10.8805 27.091 5.82564C27.0824 5.80922 27.0683 5.79641 27.0511 5.78955ZM11.202 19.6912C9.67857 19.6912 8.42193 18.3134 8.42193 16.6237C8.42193 14.9327 9.65408 13.5562 11.202 13.5562C12.7615 13.5562 14.0065 14.9443 13.9821 16.6237C13.9821 18.3147 12.7499 19.6912 11.202 19.6912V19.6912ZM21.4806 19.6912C19.9559 19.6912 18.7006 18.3134 18.7006 16.6237C18.7006 14.9327 19.9314 13.5562 21.4806 13.5562C23.0401 13.5562 24.2852 14.9443 24.2607 16.6237C24.2607 18.3147 23.0414 19.6912 21.4806 19.6912V19.6912Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_14">
                        <rect
                          width="30.9326"
                          height="30.9326"
                          fill="white"
                          transform="translate(0.865234)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </a>
          </Buttons>
        </Content>
      </Box>
    </Div>
  );
};

const P = styled.p`
  text-align: center;
  color: rgb(var(--fg));
  font-size: var(--fz-4);
`;

const Div = styled.div`
  padding-block: var(--padding-section);
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 0;

  @media (min-width: 800px) {
    align-items: center;
  }

  & button {
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export default Credit;
