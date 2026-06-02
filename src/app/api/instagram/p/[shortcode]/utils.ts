const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

const DOC_ID = "24368985919464652";
const CSRFToken = "YuvV-QRvpR2Ggzgk0cTg1T";
const COOKIE = `csrftoken=${CSRFToken}; mid=aOia4gALAAHSq3em2E34YEIFkMCC`;

export type GetInstagramPostRequest = {
  shortcode: string;
};

export type GetInstagramPostResponse = {
  data: {
    xdt_api__v1__media__shortcode__web_info: {
      items: any[];
    };
  };
};

export function getInstagramPostGraphQL(data: GetInstagramPostRequest) {
  const body = new URLSearchParams();
  body.set("av", "0");
  body.set("__d", "www");
  body.set("__user", "0");
  body.set("__a", "1");
  body.set("__req", "u");
  body.set("__hs", "20371.HYP:instagram_web_pkg.2.1...0");
  body.set("dpr", "1");
  body.set("__ccg", "GOOD");
  body.set("__rev", "1028249517");
  body.set("__s", "ywybjm:q4co81:dplvd8");
  body.set("__hsi", "7559456450740095677");
  body.set(
    "__dyn",
    "7xeUjG1mxu1syUbFp41twpUnwgU7SbzEdF8aUco2qwJw5ux609vCwjE1EE2Cw8G11wBz81s8hwGxu786a3a1YwBgao6C0Mo2swtUd8-U2zxe2GewGw9a361qw8Xxm16wa-0raazo7u3C2u2J0bS1LwTwKG0WE8oC1Iwqo5p0OwUQp1yU426V89F8uwm8jwhUaE4e1tyVrx60gm5oswFwtF85i5E"
  );
  body.set(
    "__csr",
    "geIAaiFliZllsBav4trBuTJ-KJ5WhnQyAnxeEWpBCC-hJADG9AgG4qpQ8zat5BypWy9eaRgBaJ2Xx2p6WgymmGDzQjJo8JJ4iKi8xObCjx50FzLF4-8DiwxDyGqoydV-ESQ9DLAB_GdDzFEsyUSeG8xmF9oymWyqyVFF84q5ooHohwuE5a0CU01kUUb81CE12E5V08m0WFA0ei80n2bLwjp42TOw2J-0rq04tUKp06PwEhy1u1ig4Dgy9wdW0D8n80rl0UxGtw53hEx2E1yPUy7U1J9Q0JFvc0cXwpyG4B6B2US01IAw2Bo0K215w0YEwj8"
  );
  body.set(
    "__hsdp",
    "gaQbh9gple4i4WuA2XCG7RVt5m8DxGU4K32awCF0GBcq1AyH40uWxe3AwboK5-0FE8UbkkU4-4o11XwQCyE9UswZweC4U6iq6UOewJyEhwBwjQ2259o1oE1E85u0km5Unw7Pwaau1CwMwkEeU1v82ew2rA0LoW0W8aO0Ewc6"
  );
  body.set(
    "__hblp",
    "0nE20wpGx6vxy2i1ryE9Gg6q1hwkE9WwkocUso4O2vDyof98K7o4-48hDwyLBx61HwkGg8VoGqawDxCGBwQxG6S0I8jwywXBCxKczEqxaax62m1FDxim1nw4axq0oC362m0iu7ohBxu11wEwfm0AE421xDwhEvwxzEvG2-3K0nO0zE1MUK0DA1DwgEizEW0Qp-2Awa8nxyi1fwRBwFwau68bE"
  );
  body.set("__comet_req", "7");
  body.set("lsd", "AdGtgRvhyjc");
  body.set("jazoest", "21085");
  body.set("__spin_r", "1028249517");
  body.set("__spin_b", "trunk");
  body.set("__spin_t", "1760073111");
  body.set("__crn", "comet.igweb.PolarisLoggedOutDesktopPostRouteNext");
  body.set("fb_api_caller_class", "RelayModern");
  body.set("fb_api_req_friendly_name", "PolarisPostRootQuery");
  body.set("server_timestamps", "true");
  body.set("variables", JSON.stringify({ shortcode: data.shortcode }));
  body.set("doc_id", DOC_ID);

  return fetch("https://www.instagram.com/graphql/query", {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": UA,
      "x-csrftoken": CSRFToken,
      "x-ig-app-id": "936619743392459",
      Cookie: COOKIE,
    },
    body: body.toString(),
  });
}
