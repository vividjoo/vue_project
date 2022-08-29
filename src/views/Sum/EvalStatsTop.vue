<template>
  <div>
    <!-- 목록 start -->
    <div class="mt-30">
      <div class="row justify-content-between align-items-center mb-1">
        <h5 class="font-weight-medium">
          <i class="fas fa-tags mr-5px" />
          전화상담 자동평가 결과
        </h5>
      </div>
      <ul class="d-flex h-190px mt-10px mb-20px">
        <li
          v-for="(row, index) in donutChartOpts"
          :key="index"
          class="flex_item"
          style="width: 100%"
        >
          <div>
            <highcharts :options="donutChartOpts[index]" />
          </div>
          <div style="text-align: center; font-weight: bold; font-size: 11pt">
            <label>{{ row.series[0].data[0].name }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import EvalStatsService from '@/services/EvalStatsService'
import { Chart } from 'highcharts-vue'
import HighChart from 'highcharts'

export default {
  components: { highcharts: Chart },
  data: function () {
    return {
      donutChartOpts: [],
      grid: {
        column: [
          {
            name: 'No.',
            apiColName: 'idx',
            sortable: false,
            type: 'default',
            align: 'center',
            click: false
          },
          {
            name: '상담일자',
            apiColName: 'conDtmDay',
            sortable: true,
            type: 'default',
            align: 'center',
            click: true,
            sort: 'Desc'
          },
          {
            name: '시작시간',
            apiColName: 'sttCallStartTime',
            sortable: true,
            type: 'default',
            align: 'center',
            click: false
          },
          {
            name: '통화시간',
            apiColName: 'sttCallDuration',
            sortable: true,
            type: 'sttCallDuration',
            align: 'center',
            click: false
          },
          {
            name: '상담유형(대)',
            apiColName: 'conRLClassNm',
            sortable: true,
            type: 'default',
            align: 'center',
            click: false
          },
          {
            name: '상담유형(중)',
            apiColName: 'conRMClassNm',
            sortable: true,
            type: 'default',
            align: 'center',
            click: false
          },
          {
            name: '상담유형(소)',
            apiColName: 'conRSClassNm',
            sortable: true,
            type: 'default',
            align: 'center',
            click: false
          },
          {
            name: '총점',
            apiColName: 'score',
            sortable: true,
            type: 'default',
            align: 'center',
            sortOrder: 'number',
            click: false
          },
          {
            name: '연결의 신속성',
            apiColName: 'l1m0fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '첫인사',
            apiColName: 'l1m1fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '본인확인',
            apiColName: 'l1m2fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '고객긍정',
            apiColName: 'l2m1fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '고객부정',
            apiColName: 'l2m2fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '호응',
            apiColName: 'l2m3fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '만족도',
            apiColName: 'l2m4fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '양해표현',
            apiColName: 'l2m5fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '부정표현',
            apiColName: 'l3m1fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '사물존칭',
            apiColName: 'l3m2fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '명령형',
            apiColName: 'l3m3fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '끝인사',
            apiColName: 'l4m1fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '상담원 종료멘트',
            apiColName: 'l4m2fc',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FC'
          },
          {
            name: '연결의 신속성',
            apiColName: 'l1m0fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '첫인사',
            apiColName: 'l1m1fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '본인확인',
            apiColName: 'l1m2fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '고객긍정',
            apiColName: 'l2m1fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '호응',
            apiColName: 'l2m3fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '만족도',
            apiColName: 'l2m4fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '상담제안',
            apiColName: 'l2m6fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '적합성확인',
            apiColName: 'l2m7fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '근거제시',
            apiColName: 'l2m8fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '적극성',
            apiColName: 'l2m9fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '업무처리확인',
            apiColName: 'l2m10fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '부정표현',
            apiColName: 'l3m1fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '단정적표현',
            apiColName: 'l3m4fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '끝인사',
            apiColName: 'l4m1fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '상담원 종료멘트',
            apiColName: 'l4m2fm',
            sortable: true,
            type: 'score',
            align: 'center',
            sortOrder: 'number',
            gubun: 'FM'
          },
          {
            name: '상세',
            apiColName: 'detail',
            sortable: false,
            type: 'detail',
            align: 'center'
          }
        ],
        data: [],
        total: 0,
        id: null
      }
    }
  },
  methods: {
    openSttDetailPop(recKey) {
      //console.log(recKey);
      let link = {
        name: 'QaDetailPop',
        params: {
          recKey: recKey
        }
      }

      const _width = window.screen.width - window.screen.width / 6
      const _height = window.screen.height - window.screen.height / 5
      const _left = Math.ceil((window.screen.width - _width) / 2)
      const _top = Math.ceil((window.screen.height - _height) / 2)

      let options =
        'width=' +
        _width +
        ',height=' +
        _height +
        ',left=' +
        _left +
        ',top=' +
        _top

      let routeData = this.$router.resolve(link)
      window.open(routeData.href, '_blank', options)
    },
    createMClassList(data) {
      let avgScore
      let baseScore

      this.mClassListData = []

      data.forEach((value, index) => {
        if (!value.avgScore) {
          avgScore = 0
        } else {
          avgScore = value.avgScore
        }
        if (!value.baseScore) {
          baseScore = 0
        } else {
          baseScore = value.baseScore
        }

        this.mClassListData.push({
          mClassId: value.mClassId,
          mClassName: value.mClassName,
          avgScore: avgScore,
          baseScore: baseScore
        })
      })
      //console.log(this.mClassListData);
    },
    evalResult() {
      const params = this.search
      params.employeeArr = params.employeeArr.toString()

      EvalStatsService.getScoreDataList(params)
        .then(response => {
          const { data } = response
          this.createDonutChart(data)
          this.createMClassList(data)
        })
        .catch(error => {
          console.log('error: ', error)
          //this.page.loading = false;
        })
    },
    createDonutChart(data) {
      this.donutChartOpts = []

      let colors = HighChart.getOptions().colors

      data.forEach((value, index) => {
        let donutChartData = {}
        let avgScore = 0
        let baseScore = 0
        donutChartData = Object.assign({}, UtilsChart.style.donut) // style
        //donutChartData.height = 180;
        donutChartData.chart.height = 150
        donutChartData.boost = { enabled: true }
        donutChartData.legend.enabled = false

        if (!value.avgScore) {
          avgScore = 0
        } else {
          avgScore = value.avgScore
        }
        if (!value.baseScore) {
          baseScore = 0
        } else {
          baseScore = value.baseScore
        }

        donutChartData.title = {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          y: 20
        }
        donutChartData.title.text = avgScore + '/' + baseScore

        donutChartData.series = [
          {
            name: '',
            data: []
            //showInLegend: false
          }
        ]

        donutChartData.series[0].data = [
          {
            name: value.mClassName,
            y: Math.round((value.avgScore / value.baseScore) * 100),
            color: colors[index]
          },
          {
            name: '',
            y: 100 - Math.round((value.avgScore / value.baseScore) * 100),
            color: '#fff'
          }
        ]

        this.donutChartOpts.push(donutChartData)
      })
    }
  }
}
</script>

<style></style>
