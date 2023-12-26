<template>
  <div class="wrap">
    <div class="view_modal" v-if="true">
      <div class="modal_inner">
        <button class="close_btn" @click="closeBtn()">확인</button>
      </div>
    </div>
    <!-- 첫번째 START -->
    <div class="wrap1">
      <fieldset class="wrap1_in">
        <label v-for="i in arr.length" :key="i" @click="select($event)">
          <input type="radio" name="contact" />
          <span>{{ arr[i - 1] }}</span>
        </label>
      </fieldset>
    </div>
    <!-- 첫번째 END -->

    <!-- 두번째 START -->
    <div class="wrap2" id="wrap2">
      <fieldset class="wrap2_in">
        <label v-for="i in question1.length" :key="i" @click="select2()">
          <input type="radio" name="contact2" />
          <span>{{ question1[i - 1] }}</span>
        </label>
      </fieldset>
    </div>
    <!-- 두번째 END -->
    <!-- 세번째 START -->
    <div class="wrap3" id="wrap2">
      <fieldset class="wrap2_in">
        <label v-for="i in question1.length" :key="i" @click="select3()">
          <input type="radio" name="contact2" />
          <span>{{ question1[i - 1] }}</span>
        </label>
      </fieldset>
    </div>

    <div v-if="showing">
      <button @click="modal()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-check-circle-fill"
          viewBox="0 0 16 16"
          style="width: 100px; height: 100px"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
          />
          <!-- <modal-router @click="modal()" :opening="open"></modal-router> -->
        </svg>
      </button>
    </div>

    <!-- 세번째 END -->
  </div>
</template>

<script>
import ModalRouter from "@/components/ModalRouter.vue";
export default {
  components: {
    ModalRouter,
  },
  data() {
    return {
      arr: ["하나", "둘", "셋", "넷"],
      question1: ["첫번째", "두번째", "세번째", "네번째"],
      checked: [false, false, false],
      showing: false,
      open: false,
    };
  },
  methods: {
    select(event) {
      const wrap2 = document.querySelector(".wrap2");
      const wrap2Top = wrap2.offsetTop;
      const wrap2Left = wrap2.offsetLeft;
      this.checked[0] = true;
      window.scrollTo({ top: wrap2Top, left: wrap2Left, behavior: "smooth" });
    },

    select2() {
      const wrap2 = document.querySelector(".wrap3");
      const wrap2Top = wrap2.offsetTop;
      const wrap2Left = wrap2.offsetLeft;
      this.checked[1] = true;
      window.scrollTo({ top: wrap2Top, left: wrap2Left, behavior: "smooth" });
    },
    select3() {
      this.checked[2] = true;
      let count = 0;
      this.checked.forEach((value, index) => {
        if (value) count++;
        if (count === 3) {
          this.showing = true;
        }
      });
    },
    modal() {
      document.querySelector(".view_modal").style.display = "flex";

      const param = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          hi: "312",
        },
      };
      fetch("/api/test", param)
        .then((res) => {
          console.log("res => ", res);
        })
        .catch((err) => console.log(err.message));
    },
    closeBtn() {
      document.querySelector(".view_modal").style.display = "none";
      console.log("fdas");
    },
  },
};
</script>

<style scoped>
/* label {
  font-size: 30px;
  line-height: 2rem;
  padding: 0.2em 0.4em;
}

[type="radio"],
span {
  vertical-align: middle;
}

[type="radio"] {
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  border: 2px solid gray;
  border-radius: 50%;
  transition: border 0.5s ease-in-out;
}

[type="radio"]:checked {
  border: 0.4em solid tomato;
}

[type="radio"]:focus-visible {
  outline: 2px dotted tomato;
  outline-offset: 2px;
}

[type="radio"]:hover + span {
  box-shadow: 0 0 0 0 lightgray;
  cursor: pointer;
}

[type="radio"]:hover {
  cursor: pointer;
}

[type="radio"]:disabled {
  background-color: lightgray;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}

[type="radio"]:disabled + span {
  cursor: not-allowed;
  opacity: 0.7;
} */
.wrap1 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  margin: auto;
  margin-bottom: 737.5px;
}

.wrap2 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 737.5px;
}

.wrap3 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

label {
  font-size: 2rem;
  cursor: pointer;
  line-height: 2rem;
}

[type="radio"],
span {
  vertical-align: middle;
  padding: 5px;
}
[type="radio"]:hover {
  cursor: pointer;
}
[type="radio"]:checked {
  border: 0.4em solid tomato;
}
[type="radio"] {
  appearance: none;
  border: 2px solid gray;
  border-radius: 50%;
  width: 1.2em;
  height: 0.9em;
  transition: border 0.5s ease-in-out;
}
[type="radio"]:focus-visible {
  outline: 2px dotted tomato;
  outline-offset: 2px;
}

.view_modal {
  z-index: 100;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 5rem;
}
.modal_inner {
  border: 2px solid black;
  border-radius: 10%;
  background: lightgray;
}
</style>
