<template>
  <BreadCrumb :breadcrumbs="breadcrumbs" />
  <div class="overflow-x-auto bg-white shadow-md rounded-lg mt-5">
    <div class="mb-3 flex justify-between" v-if="!create">
      <h2 class="text-lg font-bold ml-3">Listado de sesiones</h2>
      <router-link to="/sesiones/crear" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Registro
      </router-link>
    </div>
    <Grid
      :headers="headers"
      :data="data"
      @onEliminar="onEliminar"
      @onEditar="onEditar"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Grid from "@/utils/Grid/Grid.vue";
import BreadCrumb from "@/utils/Breadcrumb.vue";
import Swal from "sweetalert2";

const headers = ref([]); // Aquí se definen los encabezados de la tabla
const data = ref([]); // Aquí se define la data de la tabla
const create = ref(false);

onMounted(() => onInitData());

const breadcrumbs = [
  { text: "Inicio", link: "#" },
  { text: "Sesiones", link: "#" },
];

const onEditar = (item: any) => {
  alert(JSON.stringify(item));
};

const onEliminar = (id: number) => {
  const index = data.value?.findIndex(({ ID }) => ID === id);
  if (index !== -1) {
    const record = data.value[index];
    const solicitudText = record.DESCRIPCIÓN || 'Sin descripción';

    Swal.fire({
      title: "¿Desea eliminar el registro?",
      text: `Sesión ${record.ID}: ${solicitudText}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar el registro de data
        data.value.splice(index, 1);
        Swal.fire("Eliminado!", "El registro ha sido eliminado.", "success");
      }
    });
  } else {
    Swal.fire("Error", "Registro no encontrado.", "error");
  }
};

const onInitData = () => {
  // Definir los encabezados de la tabla
  headers.value = [
    "ID",
    "LUGAR",
    "FECHA",
    "HORA INICIO",
    "HORA FINAL",
    "DESCRIPCIÓN",
    "PRESIDENTE",
    "SECRETARIO",
    "ACCIONES",
  ];

  // Definir la data de ejemplo con 6 registros adicionales
  data.value = [
    {
      ID: 1,
      LUGAR: "Sala de conferencias",
      FECHA: "2023-10-01",
      "HORA INICIO": "10:00 AM",
      "HORA FINAL": "12:00 PM",
      DESCRIPCIÓN: "Discusión sobre las nuevas políticas de la empresa.",
      PRESIDENTE: "Juan Pérez",
      SECRETARIO: "María García",
    },
    {
      ID: 2,
      LUGAR: "Oficina central",
      FECHA: "2023-10-02",
      "HORA INICIO": "9:00 AM",
      "HORA FINAL": "11:00 AM",
      DESCRIPCIÓN: "Revisión del presupuesto anual.",
      PRESIDENTE: "Carlos López",
      SECRETARIO: "Ana Martínez",
    },
    {
      ID: 3,
      LUGAR: "Sala de juntas",
      FECHA: "2023-10-03",
      "HORA INICIO": "3:00 PM",
      "HORA FINAL": "5:00 PM",
      DESCRIPCIÓN: "Evaluación de resultados del tercer trimestre.",
      PRESIDENTE: "Pedro Díaz",
      SECRETARIO: "Laura Rodríguez",
    },
    {
      ID: 4,
      LUGAR: "Auditorio principal",
      FECHA: "2023-10-04",
      "HORA INICIO": "8:00 AM",
      "HORA FINAL": "10:00 AM",
      DESCRIPCIÓN: "Presentación del nuevo plan estratégico.",
      PRESIDENTE: "Miguel Fernández",
      SECRETARIO: "Sara Gómez",
    },
    {
      ID: 5,
      LUGAR: "Oficina de proyectos",
      FECHA: "2023-10-05",
      "HORA INICIO": "2:00 PM",
      "HORA FINAL": "4:00 PM",
      DESCRIPCIÓN: "Revisión del proyecto de infraestructura.",
      PRESIDENTE: "Jorge Ramírez",
      SECRETARIO: "Lucía Castro",
    },
    {
      ID: 6,
      LUGAR: "Sala de reuniones 2",
      FECHA: "2023-10-06",
      "HORA INICIO": "11:00 AM",
      "HORA FINAL": "1:00 PM",
      DESCRIPCIÓN: "Discusión de asuntos legales.",
      PRESIDENTE: "Roberto Martínez",
      SECRETARIO: "Clara López",
    },
    {
      ID: 7,
      LUGAR: "Sala de juntas",
      FECHA: "2023-10-07",
      "HORA INICIO": "4:00 PM",
      "HORA FINAL": "6:00 PM",
      DESCRIPCIÓN: "Evaluación de desempeño del equipo.",
      PRESIDENTE: "María González",
      SECRETARIO: "Daniela Ruiz",
    },
    {
      ID: 8,
      LUGAR: "Sala de conferencias",
      FECHA: "2023-10-08",
      "HORA INICIO": "9:00 AM",
      "HORA FINAL": "11:00 AM",
      DESCRIPCIÓN: "Reunión para discusión de nuevos contratos.",
      PRESIDENTE: "Fernando Torres",
      SECRETARIO: "Valentina Ríos",
    },
    {
      ID: 9,
      LUGAR: "Oficina central",
      FECHA: "2023-10-09",
      "HORA INICIO": "3:00 PM",
      "HORA FINAL": "5:00 PM",
      DESCRIPCIÓN: "Revisión de presupuestos de los departamentos.",
      PRESIDENTE: "Gabriela Martínez",
      SECRETARIO: "Rodrigo Sánchez",
    },
    {
      ID: 10,
      LUGAR: "Auditorio principal",
      FECHA: "2023-10-10",
      "HORA INICIO": "10:00 AM",
      "HORA FINAL": "12:00 PM",
      DESCRIPCIÓN: "Planificación del nuevo proyecto de expansión.",
      PRESIDENTE: "Luis Jiménez",
      SECRETARIO: "Natalia Vega",
    }
  ];
};
</script>
