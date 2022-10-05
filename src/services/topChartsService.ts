import http from '@/hooks/useHttp';

/* export const IPlistt = (Data: BodyInit) => {
  fetch('https://api.proxyscrape.com/v2/online_check.php', {
    method: 'post',

    body: Data,
  }).then((response) => {
    // console.log(response, 'response');
    response.json().then((data) => {
      console.log('res', data);
    });
  });
}; */

interface IGFormObj {}

class TChartService {
  getData(): Promise<Record<string, unknown>> {
    const baseURL = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
    return http.get(baseURL);
  }
}
export default new TChartService();
