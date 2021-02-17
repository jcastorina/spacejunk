import axios from "axios";
import { createClient } from "urql";

const url =
  "https://api-us-east-1.graphcms.com/v2/ckkitqp15hbxw01xs051fe0o0/master";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTIzMDU2NjYsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2Nra2l0cXAxNWhieHcwMXhzMDUxZmUwbzAvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDYwMzk4MTQtY2U4ZS00ZWUxLTliMTgtZDU3ODg4YmVlN2RkIiwianRpIjoiY2trb2w1eHo2NHJtZjAxeG9ldnlvYnpmayJ9.x5wT24682aGq3aQW9dHb44SUWAyooGMAJ9Eckj8IPkM9U_bj4hj1eWf-yEJg4BG5T_f_vQJfDJGGdL0kczn2OtWiwUff1G0fzHYRrzPXAiEsGC6n_QlbbWmbOcViGO5-SxDFl5kGREEzzRpUfFL-_3-TcY5yF6G6S-EHSpnJYA-3Ch100hZSXAOE6mHUjR1VMoIYJqgUv4dNYJFNdMyQfPIhaXrFcH0xZYcptga_6gpnpmDiFnaWAgPek4NIcSpRqqMb4WC5oVMaWWu63ldscVG8HxKZ0CXoVF7BKNvEhRPGG6dzOEi77U6jrt9Ocy9x6GSTefiw2uBkUuoggNdn-eRzr7Yd-KAphHYwDQKEe9Yow0MGFCwZhFeex0Nfek3ctq6KR-UQYDPH6jskIfteNSbxpwdch0CXNba8ihGpcJlQ6b5SmiFBJWBGXelaI4JgXs4_s2BiZJ03B3G9D2t2vRjRGJWJZt0SUznkk-8vN8T77T4KIilFCF08Lzln0drWSt9i2f7M29x7cbohGTpUsD-_4JFmfMSPNWbC0Eb4oUiOVjDNS85m78C30mu5y_Ez-Sf9ShNejknr_p5KbsC0s9gmdjslWAgDiDCZS8DTnbhMi8JVz5bN4ly8lMvkbFXZncGHwGWRTaeA_FI3oYOJ-jblFbNpt0ufuH4ztplIeFk";

export const get = (query: string) => {
  return axios.get(url + query, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const client = createClient({
  url,
  fetchOptions: () => ({ headers: { Authorization: `Bearer ${token}` } }),
});
